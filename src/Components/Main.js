import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles/';
import { Portfolio, About } from '.';

const useStyles = makeStyles({
  root: {},
});

const Main = (props) => {
  const { list } = props;
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <About list={list.basics} />

      <Portfolio list={list.projects} />
    </div>
  );
};

export default Main;
