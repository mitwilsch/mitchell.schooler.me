import React from 'react';
import {Link} from 'react-router-dom';
// * Material-UI
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// * Icons
import MenuIcon from '@material-ui/icons/Menu';
//import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends React.Component {
  state = {
    isOpen: false,
    page: "",
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleDrawer = (open) => () => {
    this.setState(
      {isOpen: open,}
    )
  };
// get pagename into state
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const routes = this.props.drawerListItems;  
    const drawerListItems = (
      <List>
        {routes.map(({ page, path}, key) => (
      <ListItem 
        button 
        component={Link} 
        to={path} 
        key={key}
      >
        <ListItemText primary={page} />
      </ListItem>
        ))}
      </List>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit"className={classes.grow}>
              Mitchell Schooler
            </Typography>
            {/*<IconButton
              aria-owns={open ? 'menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            > 
              <AccountCircle />
            </IconButton>*/}
            <Menu 
              id="menu"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Login</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>


        <Drawer open={this.state.isOpen} onClose={this.toggleDrawer(false)}>
          <div 
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
              {drawerListItems}
          </div>
        </Drawer>
      </div>
    )
  }
};
export default withStyles(styles)(Header);