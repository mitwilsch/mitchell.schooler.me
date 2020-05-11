import React from 'react';

const store = {
  profile: {
    body: `My name is Mitchell
    
    This is my site`,
    img: '/public/profile.jpg',
    links: [
      { src: '#Demo', name: 'Demo' },
      { src: '#test', name: 'Test' },
    ],
  },
  portfolio: [
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
  ],
};

export default store;
