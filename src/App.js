import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles'
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Todo from './Todo.js';

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
      { page: 'About', path: '/about', component: About},
      { page: 'Todo', path: '/todo', component: Todo}
    ];
    
    const routeComponents = 
      routes.map( ( { path, component, page}, key) => 
        <div className={classes.root}>
          
        <Route
          exact path={path} 
          component={component} 
          key={key} 
        />
        </div>
      );
  
    return (
      <Router>
        <React.Fragment>
          <Header drawerListItems={routes} pageName={this.page}/>
          {routeComponents}
        </React.Fragment>
      </Router>
    );
  } 
};

export default withStyles(styles)(App);