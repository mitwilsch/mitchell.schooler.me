import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles/';

const useStyles = makeStyles({});

const PortfolioSection = props => {
  const { list } = props;

  const styles = useStyles();

  return (
    <Paper>
      <h1>Portfolio</h1>

      <div>
        {list.map((item, index) => {
          const { title, description, img, link } = item;
          return (
            <Card elevation={5} key={index}>
              <CardContent>
                <Typography variant="h4">{item.title}</Typography>
                <img src={img} alt="ProjectImg" />
                <Typography style={{ whiteSpace: 'pre-line' }} variant="body1">
                  {/* This works for multiLine! */}
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={item.link}>
                  Demo
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </Paper>
  );
};

export default PortfolioSection;
