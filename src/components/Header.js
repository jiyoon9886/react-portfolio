// A `Header` component that appears on multiple pages
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import profilePic from '../assets/profilePic.jpg';

function Header() {
	return (
    <Grid container style={container} justify='center' alignItems='center'>
      <Grid item>
				<Paper fluid elevation={3} style={image}></Paper>
			</Grid>
      <Grid item style={{ marginLeft: '20px' }}>
        <h1 >H e l l o </h1>
        <p style={{ marginBottom: 0 }}>My name is Jiyoon Kim.</p>
        <p style={{ marginBottom: 0 }}>
          I'm a fun-loving, human-centric, web developer devoted to spreading
          positivity through creative projects.
        </p>
				<br></br>
				<ul>These are some of my technological skills:
					<li>Front-end: ReactJS • HTML • CSS • AJAX • jQuery</li>
					<li>Back-end: NodeJS • JavaScript (ES6) • ExpressJS • MongoDB • MySQL</li>
				</ul>
      </Grid>
    </Grid>
  );
}

export default Header;

const container = {
	width: '100vw',
	height: '100vh',
	flewgrow: '1',
	//fontFamily: 'Raleway',
};

const image = {
backgroundImage: `url(${profilePic}`,
backgroundSize: 'cover',
	display: 'flex',
	flexWrap: 'wrap',
padding: '187px',
marginTop: '45px',
}