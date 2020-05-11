import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles/';

const useStyles = makeStyles({});

const ProfileSection = props => {
  const styles = useStyles();
  const { body, links, avatar } = props;

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Mitchell Schooler
      </Typography>
      <img style={{ borderRadius: '50%' }} src={avatar} alt="Avatar" />
      <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
        {body}
      </Typography>

      {links.map((link, index) => {
        return (
          <Button key={index} href={link.src}>
            {link.name}
          </Button>
        );
      })}
    </div>
  );
};

export default ProfileSection;
