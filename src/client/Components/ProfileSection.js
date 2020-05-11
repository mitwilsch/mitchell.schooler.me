import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles/';
import { Avatar } from '.';

const useStyles = makeStyles({});

const ProfileSection = props => {
  const { body, img, links } = props.data;
  const styles = useStyles();

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Mitchell Schooler
      </Typography>
      <Avatar img={img} />
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
