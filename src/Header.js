import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class Header extends React.Component {
  state = {
    page: "Home",
  };
  test = () => {
    console.log("test")
  }
  render() {

    return (
      <div>
        <AppBar>
          <Toolbar>
            <Typography variant="headline" color="inherit" onClick={this.test}>
              Mitchell Schooler
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Header;