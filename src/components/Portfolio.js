import React from 'react';
import SingleProject from './SingleProject';
import { Grid, Typography } from '@mui/material';
import Project1 from '../images/budgify.jpg'
import Project2 from '../images/blog.jpg'

const projects = [
  {
    title: 'Budgify',
    description: 'Personal finance website using MySQL, Express and Handlebars.',
    imageSrc: Project1,
    deployedLink: 'https://damp-taiga-51625-c51314b9902e.herokuapp.com/',
    githubLink: 'https://github.com/andreaber23/Budgify'
  },
  {
    title: 'Tech Blog',
    description: 'Full-Stack Tech Blog app using.',
    imageSrc: Project2,
    deployedLink: 'https://still-lowlands-95397-c4be983c3821.herokuapp.com/',
    githubLink: 'https://github.com/andreaber23/MVC-Tech-Blog'
  },
  {
    title: 'Random Password Generator',
    description: 'Personal finance website using MySQL, Express and Handlebars.',
    imageSrc: Project1,
    deployedLink: 'https://damp-taiga-51625-c51314b9902e.herokuapp.com/',
    githubLink: 'https://github.com/andreaber23/Budgify'
  },{
    title: 'Budgify',
    description: 'Personal finance website using MySQL, Express and Handlebars.',
    imageSrc: Project1,
    deployedLink: 'https://damp-taiga-51625-c51314b9902e.herokuapp.com/',
    githubLink: 'https://github.com/andreaber23/Budgify'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <Typography variant="h2" align="center" gutterBottom>
          Portfolio
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
