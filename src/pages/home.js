import React from 'react';

import Grid from '@material-ui/core/Grid';

import Header from '../components/Header.js';
import Contact from '../components/Contact';
import Footer from '../components/Footer.js';

//Name
// Contact Info:
//Links to GitHub profile
//Links to LinkedIn page
//email address
//Link to PDF of resume

const Home = () => {
  return (
    <Grid
      container
      style={container}
      justify='center'
      alignItems='center'
      direction='column'
    >
      <Grid item>
        <Header />
        <Contact />
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;

const container = {
  width: '100vw',
  height: '100vh',
  flewgrow: '1',
};
