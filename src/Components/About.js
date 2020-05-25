import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles/';

const useStyles = makeStyles({
  root: {},
});

const About = props => {
  const { list } = props;
  const styles = useStyles();

  if (list) {
    return (
      <div className={styles.root}>
        <div>
          <Typography variant="h3" align="center" gutterBottom>
            About Me
          </Typography>

          <Typography variant="h5" align="center" gutterBottom>
            {list.name}, {list.label}
          </Typography>
          <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
            {list.summary}
          </Typography>
        </div>
        <br />
        <Divider />
        <div>
          <Typography variant="h3" align="center" gutterBottom>
            Contact Me
          </Typography>

          <Typography variant="h5">
            To contact me, select one of the links below
          </Typography>

          <Button
            variant="outlined"
            color="secondary"
            href={`mailto:${list.email}`}
          >
            Email
          </Button>
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default About;
