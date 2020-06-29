//Navigation with React Router, dynamic rendering, or another third part router
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import JKim_WebDevResume  from '../assets/JKim_WebDevResume.pdf';

const useStyles = makeStyles({
  root: {
		flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState();


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
				<Tab 
				style={{fontFamily: 'Raleway'}} 
				component={Link} 
				to='/' 
				value='Home' 
				label='About Me' />
        <Tab
					style={{ fontFamily: 'Raleway' }}
					component={Link}
          to='/projects'
          value='Projects'
          label='Projects'
        />
				<Tab 
				style={{ fontFamily: 'Raleway' }}
				href={JKim_WebDevResume} 
				value='Resume' 
				label='Resume' />
      </Tabs>
    </Paper>
  );
}
