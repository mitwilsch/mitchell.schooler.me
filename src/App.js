import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

function Home() {
    return (
      <main>
        <h1 id="hello">Hello!</h1>
        <h3>My name's Mitchell!</h3>
        <p>Look around to find my contact info, resume, and cool things I'm working on.</p>
      
        <h2 id="portfolio">Portfolio</h2>
        <p>Check out my portfolio on Github! </p>
        

        <h2 id="contact">Contact Info</h2>
        <p>If you want to get ahold of me, drop me an email!</p>
        <p>Email: <a href="mailto:mitchell@schooler.me">mitchell@schooler.me</a></p>
        
      </main>
    )
  
}



export default App;
