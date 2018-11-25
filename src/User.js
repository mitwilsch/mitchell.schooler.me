import React from 'react';
import firebase from './Firestore.js';
import 'firebase/firestore';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    }
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addUser = e => {
    e.preventDefault();
    
    const db = firebase.firestore();
    
    db.settings({
      timestampsInSnapshots: true
    });

    const userRef = db.collection("users").add({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    });

    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={this.updateInput}
            value={this.state.firstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={this.updateInput}
            value={this.state.lastName}
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default User;