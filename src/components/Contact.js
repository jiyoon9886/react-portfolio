import React from 'react';


import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton } from '@material-ui/core';

const Contact = () => {
	return (
    <div style={contactIcons}>
      <IconButton href='https://github.com/jiyoon9886'>
        <GitHubIcon className='material-icons md-dark' />
      </IconButton>
      <IconButton href='https://www.linkedin.com/in/ji-yoon-kim-161a001a4/'>
        <LinkedInIcon className='material-icons md-dark' />
      </IconButton>
      <IconButton href='https://www.instagram.com/jiyoonest/'>
        <InstagramIcon className='material-icons md-dark' />
      </IconButton>
      <IconButton href='mailto:jiyoon9886@gmail.com'>
        <MailOutlineIcon className='material-icons md-dark' />
      </IconButton>
      <p>I look forward to meeting you!</p>
    </div>
  );
}

export default Contact;

const contactIcons = {
  textAlign: 'center',
};