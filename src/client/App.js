import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles/';
import { Section, Avatar, Project } from './Components';
import ProfileSection from './Components/ProfileSection';
import PortfolioSection from './Components/PortfolioSection';
import store from './store';

const useStyles = makeStyles({});

const App = () => {
  const styles = useStyles();
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <ProfileSection data={store.profile} />
      </div>
      <div style={{ flex: 2 }}>
        <PortfolioSection list={store.portfolio} />
      </div>
    </div>
  );
}; // App

export default App;
/* 
Need way to list sections for fab TOC actions

*/
