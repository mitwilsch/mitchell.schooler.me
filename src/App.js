import React from 'react';
import { CssBaseline, makeStyles, Container } from '@material-ui/core';
import { Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Main from './Components/Main';
import Contact from './Components/Contact';

const useStyles = makeStyles(theme => ({
  root: { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
  main: { marginTop: theme.spacing(8), marginBottom: theme.spacing(2) },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
}));

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <CssBaseline />

      <Header>
        <Container component="main" className={styles.main} maxWidth="sm">
          <Route exact={true} path="/" component={Main}></Route>
          <Route path="/Portfolio" component={Portfolio}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
        </Container>
      </Header>
      <footer className={styles.footer}>
        <Container maxWidth="sm">
          <Footer />
        </Container>
      </footer>
    </div>
  );
}; // App

export default App;
