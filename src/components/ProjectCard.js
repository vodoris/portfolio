import React from 'react';

const ProjectCard = ({ project: { image, title, description } }) => {
  return (
    <div className="col-xs-12 col-md-4">
      <div className="tile d-flex mx-auto" style={{ backgroundImage: `url(${image})` }}>
        <div className="tile-content w-100 py-3 justify-content-center align-self-center text-center">
          <h5 className="tile-title">{title}</h5>
          <div className="tile-body">
            <p className="lead">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;