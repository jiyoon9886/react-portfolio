import React from "react";
import ProjectCard from "../components/ProjectCard.js";
import myProjects from "../utils/myProjects";
//List of projects. For each:
 // Project title
 // Link to the deployed version
 // Link to the GitHub repository
 // GIF or screenshot of the deployed application

const Projects = () => {
    return (
      <div>
        {myProjects.map((project) => (
          <ProjectCard 
						image={project.image}
						title={project.title}
						description={project.description}
						repo={project.repo}
						demo={project.demo}
					/>
        ))}
      </div>
    );
}

export default Projects;