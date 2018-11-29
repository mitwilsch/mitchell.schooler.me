import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        //marginLeft: theme.spacing.unit *3,
        //paddingTop: theme.spacing.unit * 5,
    },
    card: {
      flex: '1 0',
      width: "100px",
    }, 
    content: {
      flex: '1',
      width: '10',
      flexBasis: '100px',
    },
});

function CardConstructor(props) {
  const classes = styles;

  return (
    <Card 
      raised={true} 
      className={classes.card}
    >
      <CardContent className={classes.content}>
        <Typography color="textSecondary" 
          gutterBottom
          className={classes.content}>
          Hello
        </Typography>
         <Typography variant="h2">
          This is a demo Card
        </Typography>
      </CardContent>
    </Card>
  );
}

class Page extends React.Component {

  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
       

        <CardConstructor />
        
      </div>
    );
  } 
};

export default withStyles(styles)(Page);