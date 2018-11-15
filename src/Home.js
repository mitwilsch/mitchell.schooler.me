import React from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Mail from '@material-ui/icons/Mail';

function Home() {
    return (
      <div>
        <Typography variant="h3">
          Hello!
        </Typography>
        <h3>My name's Mitchell!</h3>
        <p>
            I'm a Freelance Web Developer focusing in NodeJS/React
        </p>
      
        <p>Check out my portfolio on Github! </p>
        <Button  variant="outlined" href="http://www.github.com/mitwilsch">
          GitHub
        </Button>
        <h2 id="contact">Contact Info</h2>
        <p>If you want to get ahold of me, drop me an email!</p>
        <Button variant="outlined" 
          href="mailto:mitchell@schooler.me"
        >
          <Mail />
        </Button>   
      </div>
    )  
};
export default Home;