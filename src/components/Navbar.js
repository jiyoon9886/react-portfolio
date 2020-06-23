//Navigation with React Router, dynamic rendering, or another third part router
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
	const [value, setValue] = React.useState(0);
	
	const location = useLocation();

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
        <Tab component={Link} to='/home' value='Home' label='Home' />
        <Tab component={Link} to='/projects' value='Projects' label='Projects' />
        {/* <Tab label='Item Three' /> */}
      </Tabs>
    </Paper>
  );
}