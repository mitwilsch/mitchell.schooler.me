import React from 'react';
import cx from 'clsx';
import {
  Typography,
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
    margin: 'auto',
    borderRadius: theme.spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 500,
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
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: theme.spacing(2),
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
      backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: theme.spacing(2), // 16
      opacity: 0.5,
    },
  },
}));

const Chips = props => {
  const { list } = props;
  const styles = useStyles();
  return (
    <div className={styles.chips}>
      {list.map((item, index) => (
        <li>
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
const Portfolio = props => {
  const styles = useStyles();
  const { list } = props;

  if (list) {
    return (
      <div style={{ width: 'auto' }}>
        <Typography variant="h3" align="center" gutterBottom>
          My Portfolio
        </Typography>
        <div>
          {console.log(list)}
          {list.map((item, index) => (
            <Card elevation={5} key={index} className={styles.card}>
              {item.images.length != 0 ? (
                <img
                  src={item.images[0].resolutions.thumbnail.url}
                  width={item.images[0].resolutions.thumbnail.width}
                  height={item.images[0].resolutions.thumbnail.height}
                ></img>
              ) : null}

              <CardContent>
                <Typography variant="h5">{item.name}</Typography>

                <Typography variant="body1" gutterBottom>
                  {item.summary}
                </Typography>
                <Chips
                  key={index}
                  list={[...item.languages, ...item.libraries]}
                />
              </CardContent>
              <CardActions>
                {item.website ? (
                  <IconButton color="primary" href={item.website} size="medium">
                    <Public />
                  </IconButton>
                ) : null}

                <IconButton color="primary" href={item.githubUrl}>
                  <GitHub />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default Portfolio;
