import React from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import { HashRouter as Router, Route, 
  //Link 
} from "react-router-dom";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography"
function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
        </main>
      </div>
    </Router>
  );
}

function Home() {
    return (
      <div>
        <Typography variant="h3">
          Hello!
        </Typography>
        <h3>My name's Mitchell!</h3>
        <p>Look around to find my contact info, resume, and cool things I'm working on.</p>
      
        <h2 id="portfolio">Portfolio</h2>
        <p>Check out my portfolio on Github! </p>
        <Button  variant="outlined" href="http://www.github.com/mitwilsch">
          GitHub
        </Button>


        <h2 id="contact">Contact Info</h2>
        <p>If you want to get ahold of me, drop me an email!</p>
        <p>Email: <a href="mailto:mitchell@schooler.me">mitchell@schooler.me</a></p>
        
      </div>
    )
  
}



export default App;
