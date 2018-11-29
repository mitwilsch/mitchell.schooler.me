import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//import { HashRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
//import logo from './logo.svg';
import './index.css';
import App from './App.js';

const theme = createMuiTheme({
  palette: {
    //type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});
ReactDOM.render((
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
