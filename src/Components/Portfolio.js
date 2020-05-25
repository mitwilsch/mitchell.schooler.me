import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
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
}));

const Chips = props => {
  const { list } = props;
  const styles = useStyles();
  return (
    <div className={styles.chips}>
      {list.map(item => (
        <li>
          <Chip label={item} className={styles.chip} color="secondary" />
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
          {list.map(item => (
            <Card elevation={5}>
              <CardContent>
                <Typography variant="h4">{item.name}</Typography>

                <Typography variant="body1" gutterBottom>
                  {item.summary}
                </Typography>
                <Chips list={[...item.languages, ...item.libraries]} />
              </CardContent>
              <CardActions>
                {item.website ? (
                  <IconButton color="primary" href={item.website}>
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
