import React from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {},
  title: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
}));

const Header = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            className={styles.title}
            color="inherit"
            noWrap
          >
            Mitchell Schooler
          </Typography>
          <Button color="inherit" href="#">
            Home
          </Button>
          <Button color="inherit" href="#About">
            About
          </Button>
          <Button color="inherit" href="#Portfolio">
            Portfolio
          </Button>
          <Button color="inherit" href="#Contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
