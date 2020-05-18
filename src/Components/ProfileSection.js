import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles/';

const useStyles = makeStyles({
  main: {
    margin: 'auto',
  },
  img: {
    borderRadius: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
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
      <Typography variant="h3" align="center" gutterBottom>
        Mitchell Schooler
      </Typography>

      <img className={styles.img} src={avatar} alt="Avatar" />

      <Typography variant="h5" align="center">
        This is my website!
      </Typography>
      <Typography variant="h5" align="center" paragraph={true}>
        Check out some cool things I made
      </Typography>

      <div className={styles.alignItemsAndJustifyContent}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          href={'#Contact'}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
