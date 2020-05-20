import React from 'react';
import { CssBaseline, makeStyles, Container } from '@material-ui/core';
import { Footer, Header, ProfileSection, PortfolioSection } from './Components';

const useStyles = makeStyles(theme => ({
  root: { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
  main: { marginTop: theme.spacing(8), marginBottom: theme.spacing(2) },
}));

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <CssBaseline />
      <Header />
      <Container component="main" className={styles.main}>
        <ProfileSection />
        <PortfolioSection />
      </Container>

      <Footer />
    </div>
  );
}; // App

export default App;
