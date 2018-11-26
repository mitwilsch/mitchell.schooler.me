import React from 'react';
import firebase from './Firestore.js'; // API keys
import 'firebase/firestore';

function Fire (props) {
  // this should take input as doc and collection wanted
  //Fire(totos, )
  let state = {};
  let db = firebase.firestore();
  let totos = 'admin';
  let todoRef =  db.collection('users').doc(totos);
  let getTodoRef = () => {
    this.todoRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          state = {
            todo: doc.data().todo
          };
        }
      }).catch(err => {
        console.log('Error getting document', err);
      });  
  };
  
  let addTodoRef = function () {
    todoRef = {
      todo: state.todo
    }
  };

  let fire = e => {
    e.preventDefault();
    
    let db = this.db;
    db.settings({
      timestampsInSnapshots: true
    });
    console.log("Hello")
  };

  return fire
  
};



class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    }
  }

  
// fire doesn't work yet :(
  render() {
    let db = Fire();
    let updateInput = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    return (
        
        <form onSubmit={Fire.fire}>
          <input
            type="text"
            name="todo"
            placeholder="Todo Item"
            onChange={updateInput}
            value={this.state.todo}
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default Todo;