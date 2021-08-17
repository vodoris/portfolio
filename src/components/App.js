import React from 'react';
import Header from './Header';
import image from '../assets/images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';

const App = () => {
  return (
    <div className="bg-overlay">
      <Header />
      <div className="d-flex h-100 mx-auto flex-column">

        <main>
          <section>
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

              </div>
            </article>
            <article className="projects-article d-flex vh-100 mx-auto">
              <div className="justify-content-center align-self-center w-100">

                <h1 className="display-1 text-center mb-5">Projects</h1>
                <div className="container">
                  <div className="row justify-content-md-center">

                    <div className="col-xs-12 col-md-4">
                      <div className="tile d-flex mx-auto" style={{ backgroundImage: `url(${image})` }}>
                        <div className="tile-content w-100 py-3 justify-content-center align-self-center text-center">
                          <h5 className="tile-title">D&amp;D Group Finder</h5>
                          <div className="tile-body">
                            <p className="lead">A single page website with modern responsive design and a basic call to action.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </article>
            <article className="contact-article d-flex vh-100 mx-auto">
              <div className="justify-content-center align-self-center w-100">

                <h1 className="display-1 text-center mb-5">Contact</h1>


              </div>
            </article>
          </section>
        </main>

      </div>
    </div>
  );
};

export default App;