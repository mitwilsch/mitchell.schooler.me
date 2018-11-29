import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles'
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';

const styles = theme => ({
  root: {
    // global styles go here
  },
});

class App extends React.Component {
  render() {
    const {classes} = this.props;

    const routes = [ // drawer gets routes from this list
      { page: 'Home', path: '/', component: Home}, 
      { page: 'About', path: '/about', component: About}
    ];
    
    const routeComponents = 
      routes.map( ( { path, component, page}, key) => 
      <Route
        exact path={path} 
        component={component} 
        key={key} 
      />
    );

    return (
      <Router>
        <div className={classes.root}>
          <Header drawerListItems={routes} pageName={this.page}/>
          {routeComponents}
        </div>
      </Router>
    );
  } 
};

export default withStyles(styles)(App);