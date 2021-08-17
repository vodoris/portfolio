import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faEnvelope);

const ContactInfo = () => {

  const iconData = [
    { name: 'email', type: faEnvelope, link: 'mailto:mattgilbert042@gmail.com' },
    { name: 'linkedin', type: ['fab', 'linkedin'], link: 'https://www.linkedin.com/in/matthewrgilbert/' },
    { name: 'github', type: ['fab', 'github'], link: 'https://github.com/vodoris' },
  ]

  const icons = iconData.map(icon => {
    return (
      <div key={icon.name} className="col-xs-12 col-md-4">
        <a href={icon.link} target="_blank" rel="noreferrer">
          <div className="contact-icon-wrapper">
            <FontAwesomeIcon
              icon={icon.type}
              color="white"
              className="contact-icon"
              size="5x"
            />
          </div>
        </a>
      </div>
    )
  })

  return (
    <article className="contact-article d-flex vh-100 mx-auto">
      <div className="justify-content-center align-self-center w-100">

        <h1 className="display-1 text-center mb-5">Contact</h1>
        <div className="container">
          <div className="row justify-content-md-center text-center">
            {icons}
          </div>
        </div>

      </div>
    </article>
  );
};

export default ContactInfo;