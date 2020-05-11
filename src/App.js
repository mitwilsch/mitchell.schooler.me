import React from 'react';
import { makeStyles } from '@material-ui/styles/';
import ProfileSection from './Components/ProfileSection';
import PortfolioSection from './Components/PortfolioSection';
import avatar from './profile.jpg';

const useStyles = makeStyles({});

const App = () => {
  const styles = useStyles();

  const profile = {
    body: `My name is Mitchell
    
  This is my site`,
    avatar,
    links: [
      { src: '#Demo', name: 'Demo' },
      { src: '#test', name: 'Test' },
    ],
  };

  const portfolio = [
    {
      title: 'Title of project',
      description: 'Description of project\n Test',
      img: '/public/favicon-32x32.png',
      link: '#Link',
    },
    {
      title: 'title 2',
      description: 'testing 2',
      img: '',
      link: '#2',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <ProfileSection
          body={profile.body}
          links={profile.links}
          avatar={profile.avatar}
        />
      </div>
      <div style={{ flex: 2 }}>
        <PortfolioSection list={portfolio} />
      </div>
    </div>
  );
}; // App

export default App;
/* 
Need way to list sections for fab TOC actions

*/
