import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// implement routing

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
        <p>This section coming soon!</p>

        <h2 id="contact">Contact Info</h2>
        <p>If you want to get ahold of me, drop me an email!</p>
        <p>Email: <a href="mailto:mitchell@schooler.me">mitchell@schooler.me</a></p>
        
      </main>
    )
  
}

function Header(props) {
  const { classes } = props;
    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Home
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default App;
