import React from 'react';

import ProjectCard from '../components/ProjectCard.js';
import Grid from '@material-ui/core/Grid';

import myProjects from '../utils/myProjects';

const Projects = () => {
  return (
    <Grid
      container
      style={container}
      justify='center'
      direction='row'
    >
        {myProjects.map((project) => (
          <ProjectCard
						key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            repo={project.repo}
            demo={project.demo}
          />
        ))}
    </Grid>
  );
};

export default Projects;

const container = {
  width: '100vw',
  height: '100vh',
	flewgrow: '1',
	fontFamily: 'Raleway',
};
