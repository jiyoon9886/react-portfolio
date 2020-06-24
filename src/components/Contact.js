import React from 'react';
import { Link } from 'react-router-dom';

import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contact = () => {
	return (
    
    <div style={{ textAlign: 'center' }}>
      <Link to='https://github.com/jiyoon9886'>
        <GitHubIcon />
      </Link>
      <p>I look forward to meeting you!</p>
    </div>


  );
}

export default Contact;