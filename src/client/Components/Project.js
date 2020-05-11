import React from 'react';

const Project = props => {
  const { title, img, desc, link } = props;
  return (
    <div className="card">
      <h1>{title}</h1>
      <div>{img}</div>
      <div>{desc}</div>
      <div>{link}</div>
    </div>
  );
};

export default Project;
