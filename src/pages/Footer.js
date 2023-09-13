import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'> 
        <GitHubIcon/>
        <LinkedInIcon/>
        <EmailIcon/>
        <PhoneIphoneIcon/>
      </div>
        <p>      Andrea Berrios -  2023 </p>
    </div>
  )
}

export default Footer
