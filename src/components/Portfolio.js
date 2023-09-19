import React from 'react';
import SingleProject from './SingleProject';
import { Grid, Typography } from '@mui/material';
import Project1 from '../images/budgify.jpg'
import Project2 from '../images/blog.jpg'
import Project3 from '../images/password.jpg'
import Project4 from '../images/textEditor.jpg'
import Project5 from '../images/readmeGenerator.jpg'
import Project6 from '../images/myhealthspace.jpg'

const projects = [
  {
    title: 'Budgify',
    description: 'Personal finance website using MySQL, Express and Handlebars.',
    imageSrc: Project1,
    deployedLink: 'https://budgify-3a01649b95ad.herokuapp.com/',
    githubLink: 'https://github.com/andreaber23/Budgify'
  },
  {
    title: 'Tech Blog',
    description: 'Full Stack application using Handlebars.js, Sequelize, and Express-session.',
    imageSrc: Project2,
    deployedLink: 'https://still-lowlands-95397-c4be983c3821.herokuapp.com/',
    githubLink: 'https://github.com/andreaber23/MVC-Tech-Blog'
  },
  {
    title: 'Random Password Generator',
    description: 'Generates random passwords with special characters, numbers and letters .',
    imageSrc: Project3,
    githubLink: 'https://github.com/andreaber23/random-password-generator'
  },
  {
    title: 'PWA Text Editor',
    description: 'Online and offline text editor',
    imageSrc: Project4,
    deployedLink: 'https://damp-retreat-93740-4c6cf8bac678.herokuapp.com/',
    githubLink: 'https://github.com/andreaber23/PWA-Text-Editor'
  },
  {
    title: 'Professional ReadMe Generator',
    description: 'Generates readme file.',
    imageSrc: Project5,
    githubLink: 'https://github.com/andreaber23/Professional-README-Generator'
  },
  {
    title: 'myhealthspace',
    description: 'Full-Stack application using React, MongoDB Atlas, Express and Node.js.',
    imageSrc: Project6,
    deployedLink: 'https://my-health-space-e9d209a11adb.herokuapp.com/',
    githubLink: 'https://github.com/andreaber23/myhealthspace'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: '30px', fontFamily: 'Arial, sans-serif'}}>
          My Projects 💻 
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <SingleProject
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Portfolio;
