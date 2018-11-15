import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import { HashRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  } 
};
export default App;