import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Paper,
} from '@material-ui/core';

const PortfolioSection = props => {
  const { list } = props;

  return (
    <Paper>
      {/*Material this component */}
      <h1>Some of my projects</h1>

      <div>
        {list.map((item, index) => {
          const { title, description, img, link } = item;
          return (
            <Card elevation={5} key={index}>
              <CardContent>
                <Typography variant="h4">{item.title}</Typography>

                <Typography style={{ whiteSpace: 'pre-line' }} variant="body1">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" color="secondary" href={item.link}>
                  Link
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
