import React from 'react';
//import { withStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown/with-html';

document.title="About";
//const styles = theme => ({  })
const page = `
# About

I've had a personal website since 2012, originally started as a way for
  my famly and I, to share news, events (reunions, holiday plans, etc.)
  and so on. I had grand plans, but almost everyone in my family just 
  uses Facebook, so my little slice (mitchell.schooler.me) is
  a playground of sorts for me.

So, this is my website. Here is the current setup:

* React PWA
* Git repo is hosted on GitHub Pages, using my custom domain

That list is a lot shorter than some of the hosting methods I've chosen 
  before (at one time I had 4 different free services combined hosting a 
  static site with no JS!)

The magic all happens in the React app, and I'm really happy with the 
  workflow. I don't have to mess with .htaccess/nginx/apache 
  configs anymore, I have an easier build/deploy cycle, and I'm
  learning more about React every day. 

What you're seeing now is a reflection of my web development improvement,
  as I learn more I add and improve my own slice of the web. 

## Why I chose React
I love the idea of React/NodeJS, modularized components, JavaScript on the 
  front-end and back-end, the wide-spread support for deploying apps
  as well as the community. It's the most approachable stack I've worked
  with so far, which is pretty important to me with my work schedule
  and hardware constraints (I work 60+ hours in food service, so when I 
  get the itch to work on something, I want to get it done, even if all
  I have to work on is my phone. Mobile access and open-edit-deploy
  workflows are essential to develop on the side)

  I am also pursuing a job as a developer, and I like working with 
  JavaScript more than any language I've learned (Python, Ruby, C++, 
  Java, in that order)


## So what's next?
Here's a list of things I'm working on

I'm working on making a series of React components, that can work within
  my site, as well as being quality enough to publish, that deal with my 
  current problems. 
  
Most of these will require user authentication, 
  and that's another hurdle in my development experience, so I'm looking
  forward to working on these, though they may not be my current focus.
  (life gets in the way a lot, bills don't pay themselves)

  In some of these project plans I list, I mention production or dogfood.
    To clarify, 
    Production is the level of features and stability in an
    app that I would consider sharing it to the world.

  Dogfood is the level I deem worthy to myself using an app. For example,
    if some issue causes crashes on me or I notice some glaring fault, 
    I would put up with it until it bothered me enough to fix it.
   
  If I was building to production, I would invoke my inner perfectionist,
    meaning I can't stop until everything is perfect. 

  I could probably define finer names for levels of development, but 2 
    is enough for now.
  
  ### React-focused projects
  * __Todo app__

  This will be some form of to-do app, either hosted within an app 
    (behind a login screen for a user of an app), or possibly hosted as a 
    React component (personal todo app wherever you go), with common 
    GTD-inspired features. Inspiration for this comes from Google Inbox 
    closing down, and my distaste in the old Gmail app, 
    so the to-do app would follow a similar UI experience, i.e. cards with 
    actionable items, swiping to dismiss items for a later date or to an 
    archive, FAB for new to-do, and since Inbox will be gone, some way of 
    importing or "sharing" an email from Gmail (also why I focused on 
    making my website PWA-compatible, to accomodate for this functionality)

    It would also, if I ever finish to production, be able to call on APIs
      to share actions to other apps on mobile. 
      
  Example flow: Todo item has a file attached, send to email


  * __Personal Wiki__
    I've dabbled in so many small-format wiki's for information management,
    I believe there's a niche here for automating my deploy method, 
    combined with a wiki platform, that can be spun up on any server the user
    wants.




  * __Games library__

  I want more games on my phone! But when I look on the app store, it's 
  all candy crush and clash of clans clones. I want a REAL game!

  Some of the essential classics for me are: (tetris, solitaire, 
  minesweeper, sudoku, brick breaker, snake)

  But I have to install 12 different apps for all that???

  I've always enjoyed sharing games with people, and I feel like we're
  in a unique time where the classic games, some of the best games ever made,
  are being eclipsed by spammy money-hoarding crap. 

  Emulator hosted in React component for mobile

  * __Inventory app__
  
  This might not be very popular, but I work at Domino's pizza, and 
  taking inventory is extremely inefficient. This would be a web-app 
  that takes data input (way better than a clipboard and cheap pens that 
  won't write if you leave them in the walk-in because the phone is ringing
  AGAIN... sigh...), and hopefully there's some way to input that directly
  into the office (key actions? shift-tab after every entry?)



  ## Footer
  Thanks for visiting my site! I hope you learned something useful!
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