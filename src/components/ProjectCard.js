import React from 'react';
import ImageData from '../utils/images';

const ProjectCard = ({ project: { title, description, image, link } }) => {

  const getImage = (imageSlug) => {
    imageSlug = !imageSlug ? 'ilya' : imageSlug; // default
    const imageUrl = ImageData.find(image => {
      return image.default.includes(imageSlug);
    }).default;
    return imageUrl;
  }

  return (
    <div className="col-xs-12 col-md-4">
      <a className="project-link" href={link} target="_blank" rel="noreferrer">
        <div className="tile d-flex mx-auto" style={{ backgroundImage: `url(${getImage(image)})` }}>
          <div className="tile-content w-100 p-3 justify-content-center align-self-center text-center">
            <h5 className="tile-title">{title}</h5>
            <div className="tile-body">
              <p className="lead">{description}</p>
            </div>
          </div>
          {
            !link && (
              <div className="ribbon">Coming Soon...</div>
            )
          }

        </div>
      </a>
    </div>
  );
};

export default ProjectCard;