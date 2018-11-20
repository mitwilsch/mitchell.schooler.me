import React from 'react';
//import { withStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown/with-html';

//const styles = theme => ({  })
const page = `
# About
`

function About() {
  
    
    return (
      <div>
        <ReactMarkdown 
            source={page} 
            escapeHtml={false}
        />
      </div>
    )  
};
//export default withStyles(styles)(About);
export default About;