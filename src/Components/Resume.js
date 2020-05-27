import React, { useState, useEffect } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Hidden,
  Divider,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles/';

const useStyles = makeStyles({
  root: {},
  module: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '5%',
  },
  moduleItem: {},
  bolden: {
    fontWeight: 'bold',
  },
});

const Resume = props => {
  const styles = useStyles();
  const { list } = props;

  const Module = props => {
    const { item } = props;
    return (
      <div className={styles.moduleItem}>
        <Typography variant="h6">{`${item.company} - ${item.position}`}</Typography>
        <Typography variant="caption">
          {item.startDate} - {item.endDate ? item.endDate : 'Present'}
        </Typography>
        {item.highlights.map(x => (
          <Typography variant="body1" gutterBottom>
            {x}
          </Typography>
        ))}
      </div>
    );
  };

  if (list) {
    return (
      <div className={styles.root}>
        <Typography variant="h3" align="center" gutterBottom>
          Resumé
        </Typography>

        <Typography variant="h5" gutterBottom>
          Work Experience
        </Typography>

        <div className={styles.module}>
          {list.map(item => (
            <Module item={item} />
          ))}
        </div>

        <Typography variant="h5" gutterBottom></Typography>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default Resume;
