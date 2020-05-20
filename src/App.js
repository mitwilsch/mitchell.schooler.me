import React from 'react';

import ProfileSection from './Components/ProfileSection';
import PortfolioSection from './Components/PortfolioSection';

const App = () => {
  const profile = {
    body: '',

    links: [{ src: '#Contact', name: 'Contact' }],
  };

  const portfolio = [
    {
      title: 'Schooler.me',
      description: 'Schooler family website, interactive family tree browser',

      link: 'https://schooler.me',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <ProfileSection body={profile.body} links={profile.links} />
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
