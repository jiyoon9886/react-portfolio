// A `Header` component that appears on multiple pages
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import profilePic from '../assets/profilePic.jpg';

function Header() {
	return (


		<Grid
			container
			style={container}
			justify='center'
			alignItems='center'
		>
			<Paper fluid elevation={3} style={image}>
			</Paper>
			<Grid item style={{ marginLeft: '20px',}}>
				<h3>Hello! </h3>
				<p>My name is Jiyoon.</p>
				<p>I'm a fun-loving, human-centric, web developer devoted to spreading positivity through my creative projects. I look forward to meeting you!</p>
			</Grid>
				
		</Grid>
	)
}

export default Header;

const container = {
	width: '100vw',
	height: '100vh',
	flewgrow: '1',
};

const image = {
backgroundImage: `url(${profilePic}`,
backgroundSize: 'cover',
	display: 'flex',
	flexWrap: 'wrap',
padding: '200px',
margin: '15px',
}