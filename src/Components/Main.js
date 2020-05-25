import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles/';

const useStyles = makeStyles({
  root: {},
});

const Main = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Typography variant="h3" align="center" gutterBottom>
        Mitchell Schooler
      </Typography>
      <Typography variant="h5" align="center" paragraph={true}>
        Hi, my name is Mitchell Schooler. I love making pizza, coding, and
        telling jokes.
      </Typography>
      <Typography variant="h5" align="center" paragraph={true}>
        Check out some of my projects, my Resumé, or read more about me.
      </Typography>
    </div>
  );
};

export default Main;
