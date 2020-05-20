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
    </div>
  );
};

export default About;
