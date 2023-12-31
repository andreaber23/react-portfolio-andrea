import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function About() {
  return (
    <div className='aboutMe'>
      <h2>About Me</h2>
      <p> Hello, I'm Andrea Berrios, a passionate and creative Full Stack Developer with a deep love for crafting digital solutions that bring ideas to life.


       I have a strong foundation in both back-end and front-end development. My journey of coding began with my curiosity for technology, and I have transformed that curiosity into a dedication to create efficient, user-friendly and very creative digital experiences.
     </p>
     <div className='socialMediaAbout'> 
        <GitHubIcon/>
        <LinkedInIcon/>
      </div>
    </div>
  )
}

export default About
