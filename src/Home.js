import React from 'react';
//import { withStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown/with-html';
//const styles = theme => ({  })

const page = `
# My Name's Mitchell!

I'm a hacker by heart, pizza maker by trade. I solve problems and make
dreams happen, and I help the fine citizens of San Clemente get their 
hot and greasy pepperoni goodness. I can be found wherever there is coffee, 
and my philosophy is "Smoke if you got 'em".

## But enough about me...

Well, actually there's not much else. Try clicking around, or try again later
`;

function Home() {
  return (
    <div>
      <ReactMarkdown 
          source={page} 
          escapeHtml={false}
      />
    </div>
  );  
};
//export default withStyles(styles)(Home);
export default Home;