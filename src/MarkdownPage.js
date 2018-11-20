import React from 'react';

const markdownFiles = require.context('./markdown/', true /* search subdirectories */, /\.md$/);
const MarkdownPage = ({path}) => (
    <div dangerouslySetInnerHTML={markdownFiles(path)} />
);

export default MarkdownPage;