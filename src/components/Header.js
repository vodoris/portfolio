import React from 'react';
import { Link } from 'react-scroll';

const Header = ({ links }) => {
  const navLinks = links.map(link => {
    return (
      <Link
        key={link.id}
        activeClass="active"
        className={`${link.title.toLowerCase()} nav-link`}
        to={link.title.toLowerCase()}
        spy={true}
        smooth={true}
        duration={500}
      >
        {link.title}
      </Link>
    );
  })
  return (
    <header className="header-sticky w-100 text-center py-2 text-center">
      <div className="nav-header mx-auto">
        <h3 className="header-left">Matt Gilbert</h3>
        <nav className="header-right nav justify-content-center">
          {navLinks}
        </nav>
      </div>
    </header>
  );
};

export default Header;