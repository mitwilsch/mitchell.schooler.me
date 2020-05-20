import React from 'react';
import { Typography, Link, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mitchell.schooler.me">
        Mitchell Schooler
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Footer = props => {
  const styles = useStyles();

  return (
    <Container component="footer" className={styles.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        mitchell.schooler.me
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Created with React
      </Typography>
      <Copyright />
    </Container>
  );
};

export default Footer;
