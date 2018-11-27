import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//import { HashRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
//import logo from './logo.svg';
import './index.css';
import App from './App.js';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { FirestoreProvider } from 'react-firestore';

const config = {
  apiKey: "AIzaSyC0ioz6eb_Xt59OM60O3vb2LFkWxOpYo4Y",
  authDomain: "mitwilsch-dev.firebaseapp.com",
  databaseURL: "https://mitwilsch-dev.firebaseio.com",
  projectId: "mitwilsch-dev",
  storageBucket: "mitwilsch-dev.appspot.com",
  messagingSenderId: "977308747090"
};
firebase.initializeApp(config);

const theme = createMuiTheme({
  palette: {
    //type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});
ReactDOM.render((
  <FirestoreProvider 
    firebase={firebase}
    useTimestampsInSnapshots
  >
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </FirestoreProvider>
), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
