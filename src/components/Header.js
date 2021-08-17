import React from 'react';

const Header = () => {
  return (
    <header className="header-sticky w-100 text-center py-2 text-center">
      <div className="nav-header mx-auto">
        <h3 className="header-left">Matt Gilbert</h3>
        <nav className="header-right nav justify-content-center">
          <a className="nav-link active" href="#">Welcome</a>
          <a className="nav-link" href="#">Projects</a>
          <a className="nav-link" href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;