import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles/';

const useStyles = makeStyles({
  root: {},
});

const About = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Typography variant="h3" align="center" gutterBottom>
        About Me
      </Typography>

      <Typography variant="h5" gutterBottom>
        Hi! my name is Mitchell. I'm 27, studying software development.
      </Typography>
      <Typography variant="h5">
        I'm a manager at Domino's for over 7 years, and I currently live in San
        Diego
      </Typography>
    </div>
  );
};

export default About;
