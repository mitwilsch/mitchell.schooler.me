import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles'
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Todo from './Todo.js';
import Page from './Page.js';

const styles = theme => ({
  root: {
    color: 'red',
  },
});



class App extends React.Component {
    render() {
    //const {classes} = this.props;

    const routes = [
      { page: 'Home', path: '/', component: Home}, 
      { page: 'About', path: '/about', component: About},
      { page: 'Project: Todo', path: '/todo', component: Todo},
      { page: 'New Style', path: '/new-style', component: Page}
    ];
    
    const routeComponents = 
      routes.map( ( { path, component, page}, key) => 
        <div>
          
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