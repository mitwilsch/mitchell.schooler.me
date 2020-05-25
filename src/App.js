import React, { useState, useEffect } from 'react';
import { CssBaseline, makeStyles, Container } from '@material-ui/core';
import { Route } from 'react-router-dom';
import {
  Footer,
  Header,
  Portfolio,
  About,
  Main,
  Contact,
  Resume,
} from './Components';
import api from './default-api';

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

  const [resume, setResume] = useState([]);

  const fetchApi = async () => {
    const res = await fetch('https://gitconnected.com/v1/portfolio/mitwilsch');
    const data = await res.json();
    setResume(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className={styles.root}>
      <CssBaseline />

      <Header>
        <Container component="main" className={styles.main} maxWidth="sm">
          <Route exact={true} path="/" component={Main}></Route>

          <Route
            path="/Portfolio"
            render={props => <Portfolio {...props} list={resume.projects} />}
          ></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route
            path="/Resume"
            render={props => <Resume {...props} list={resume.work} />}
          ></Route>
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
