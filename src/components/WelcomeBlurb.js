import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const WelcomeBlurb = () => {
  return (
    <article className="welcome-article d-flex vh-100 mx-auto">
      <div className="justify-content-center align-self-center">

        <h1 className="display-1">I'm Matt.</h1>
        <p className="lead">A proficient Software Developer from
          Birmingham, AL with years of experience in modern day web development methodologies and
          frameworks.</p>
        <hr className="my-4" />
        <p className="lead">
          Below, you will find various projects. Each example demonstrates the quality of the deliverables I can offer.
          If you have any questions, please reach out to me here.
        </p>
        <div className="text-center">
          <Link
            activeClass="active"
            className={`projects`}
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FontAwesomeIcon
              key={`faArrow`}
              icon={faChevronDown}
              className="welcome-cta"
              color="white"
              size="5x"
            />
          </Link>

        </div>

      </div>
    </article>
  );
};

export default WelcomeBlurb;