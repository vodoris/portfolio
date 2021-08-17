import React from 'react';
import { Element } from 'react-scroll';
import Header from './Header';
import WelcomeBlurb from './WelcomeBlurb';
import ProjectList from './ProjectList';
import ContactInfo from './ContactInfo';

const App = () => {
  const articlesData = [
    {
      id: 1,
      title: 'Welcome',
      component: <WelcomeBlurb />
    },
    {
      id: 2,
      title: 'Projects',
      component: <ProjectList />
    },
    {
      id: 3,
      title: 'Contact',
      component: <ContactInfo />
    }
  ];

  const articles = articlesData.map(article => {
    return (
      <Element key={article.id} name={article.title.toLowerCase()} className="element">
        {article.component}
      </Element>
    );
  })

  return (
    <div className="bg-overlay">
      <Header links={articlesData} />
      <div className="d-flex h-100 mx-auto flex-column">
        <main>
          <section>
            {articles}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;