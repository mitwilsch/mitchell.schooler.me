import React from 'react';
import { FirestoreCollection } from 'react-firestore';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {};
  };

  render() {
    return (
      <FirestoreCollection
        path='users/admin/totos'
        render={({ isLoading, data }) => {
          return (
            <div>
              <ul>
                {console.log(data)}
                {data.map( doc => (

                  <li>
                    Title: {doc.title} <br />
                    Description: {doc.desc}<br />
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      />   
    ); // return
  }; // render
}; // Todo
export default Todo;