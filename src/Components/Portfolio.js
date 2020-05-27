import React from 'react';
import cx from 'clsx';
import {
  Typography,
  CssBaseline,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  Icon,
  Paper,
  makeStyles,
  Chip,
  Divider,
} from '@material-ui/core';

import { GitHub, Launch, Public } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  chips: {
    display: 'flex',
    //justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },

  card: {
    maxWidth: 500,
    /* margin: 'auto',
    borderRadius: theme.spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
   
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: theme.spacing(2),
    }, */
  },
  media: {
    //marginTop: theme.spacing(-3),
    height: 0,

    /*
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',    
    paddingBottom: '48%',
    theme.spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      marginLeft: theme.spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    
    },
    
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      //backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: theme.spacing(2), // 16
      opacity: 0.5,
    },
    */
  },
}));

const Chips = props => {
  const { list } = props;
  const styles = useStyles();
  return (
    <div className={styles.chips}>
      {list.map((item, index) => (
        <li key={index}>
          <Chip
            label={item}
            key={index}
            className={styles.chip}
            color="secondary"
            size="small"
          />
        </li>
      ))}
    </div>
  );
};

const ProjectCard = props => {
  const {
    name,
    summary,
    languages,
    libraries,
    website,
    githubUrl,
  } = props.item;

  const styles = {
    img: {
      margin: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
      height: '50%',
    },
  };
  return (
    <Paper
      style={{ margin: 'auto', marginBottom: '10%' }}
      elevation={5}
      variant="rounded"
      rounded
    >
      <div>
        <Typography color="secondary" variant="h4">
          {name}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {summary}
        </Typography>
        <div
          style={{
            backgroundColor: '#ececec',
            marginLeft: '10%',
            marginRight: '10%',
          }}
        >
          {props.item.images[0].resolutions.thumbnail.url ? (
            <img
              style={styles.img}
              src={props.item.images[0].resolutions.thumbnail.url}
            ></img>
          ) : null}
        </div>
        <Chips list={[...languages, ...libraries]} />
        {website ? (
          <Button
            size="large"
            color="primary"
            href={website}
            startIcon={<Public />}
          >
            Demo
          </Button>
        ) : null}

        <Button
          size="large"
          color="primary"
          href={githubUrl}
          startIcon={<GitHub />}
        >
          GitHub
        </Button>
        <Divider />
      </div>
    </Paper>
  );
};

const Portfolio = props => {
  const styles = useStyles();
  const { list } = props;

  if (list) {
    return (
      <div style={{ width: 'auto' }}>
        <CssBaseline />
        <Typography variant="h3" align="center" gutterBottom>
          My Portfolio
        </Typography>
        <div>
          {console.log(list)}

          {list.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default Portfolio;
