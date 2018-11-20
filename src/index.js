import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
//import logo from './logo.svg';
import './index.css';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';


class App extends React.Component {
  render() {

    const routes = [
      { page: 'Home', path: '/', component: Home}, 
    ];

    const routeComponents = 
      routes.map( ( { path, component}, key) => 
      <Route
        exact path={path} 
        component={component} 
        key={key} 
      />);
  
    return (
      <Router>
          <div>
            <Header drawerListItems={routes}/>
            {routeComponents}
          </div>
      </Router>
    );
  } 
};




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
