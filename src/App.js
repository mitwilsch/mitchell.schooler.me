import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles'
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        //alignItems: 'center',
        marginLeft: theme.spacing.unit *3,
        paddingTop: theme.spacing.unit*5,

    },
});

class App extends React.Component {
    render() {
    const {classes} = this.props;
    
   
    const routes = [
      { page: 'Home', path: '/', component: Home}, 
      { page: 'About', path: '/about', component: About}
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
          <main className={classes.root}>
            {routeComponents }
          </main>
        </div>
      </Router>
    );
  } 
};

export default withStyles(styles)(App);