import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles/';

const useStyles = makeStyles({
  main: {
    margin: 'auto',
    marginTop: '10%',
  },
  circleImg: {
    borderRadius: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '25%',
  },
  alignItemsAndJustifyContent: {
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ProfileSection = props => {
  const styles = useStyles();
  const { body, links, avatar } = props;

  return (
    <div className={styles.main}>
      <Card>
        <Typography variant="h5" align="center" paragraph={true}>
          Hi, my name is Mitchell Schooler. I love making pizza, coding, and
          telling jokes.
        </Typography>
        <Typography variant="h5" align="center" paragraph={true}>
          Check out some of my projects down below, or{' '}
          <a href="#Contact">contact me</a>
        </Typography>
        <div className={styles.alignItemsAndJustifyContent}></div>
      </Card>
    </div>
  );
};

export default ProfileSection;
