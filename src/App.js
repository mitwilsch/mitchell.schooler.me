import React from 'react';
import { makeStyles } from '@material-ui/styles/';
import ProfileSection from './Components/ProfileSection';
import PortfolioSection from './Components/PortfolioSection';
import avatar from './profile.jpg';

const useStyles = makeStyles({});

const App = () => {
  const styles = useStyles();

  const profile = {
    body: '',
    avatar,
    links: [{ src: '#Contact', name: 'Contact' }],
  };

  const portfolio = [
    {
      title: 'Schooler.me',
      description: 'Schooler family website, interactive family tree browser',
      img: '/public/favicon-32x32.png',
      link: 'https://schooler.me',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
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
