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
  return (
    <Paper>
      {/*Material this component */}
      <h1>Some of my projects</h1>

      <div>
        <Card elevation={5}>
          <CardContent>
            <Typography variant="h4">Schooler.me</Typography>

            <Typography variant="body1" gutterBottom>
              Schooler family website, interactive family tree browser
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              color="secondary"
              href="https://schooler.me"
            >
              Link
            </Button>
          </CardActions>
        </Card>
      </div>
    </Paper>
  );
};

export default PortfolioSection;
