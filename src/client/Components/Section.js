import React from 'react';
import { makeStyles } from '@material-ui/styles/';
import ReactMarkdown from 'react-markdown/with-html';

const useStyles = makeStyles({});

const Section = props => {
  const { title, page } = props;
  const styles = useStyles();

  return (
    <div>
      <h1>{title}</h1>
      {props.children}
      <ReactMarkdown source={page} escapeHtml={false} />
    </div>
  );
};

export default Section;
