import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles/';

const useStyles = makeStyles({
  root: {},
});

const Contact = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Typography variant="h3" align="center" gutterBottom>
        Contact Me
      </Typography>

      <Typography variant="h5">
        To contact me, select one of the links below
      </Typography>

      <Button
        variant="outlined"
        color="secondary"
        href="mailto:mitchell@schooler.me"
      >
        Email
      </Button>
    </div>
  );
};

export default Contact;
