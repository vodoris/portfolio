import React from 'react';
import ProjectData from '../utils/projects';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  const projects = ProjectData.map(project => {
    return <ProjectCard key={project.id} project={project} />
  })

  return (
    <article className="projects-article d-flex vh-100 mx-auto">
      <div className="justify-content-center align-self-center w-100">
        <h1 className="display-1 text-center mb-5">Projects</h1>
        <div className="container">
          <div className="row justify-content-md-center">

            {projects}

          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectList;