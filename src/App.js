import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// implement routing
class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <main>
      <h1 id="hello">Hello!</h1>
      <h3>My name's Mitchell!</h3>
      <p>Look around to find my contact info, resume, and cool things I'm working on.</p>
    
      <h2 id="portfolio">Portfolio</h2>
      <p>This section coming soon!</p>

      <h2 id="contact">Contact Info</h2>
      <p>If you want to get ahold of me, drop me an email!</p>
      <p>Email: <a href="mailto:mitchell@schooler.me">mitchell@schooler.me</a></p>
      
    </main>
    )
  }
}
export default App;
