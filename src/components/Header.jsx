import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title playfair-display-900">Total Interior Eco</h1>
        <nav className={`navbar ${isMenuOpen ? 'navbar--open' : ''}`}>
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link" href="/">Home</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="/about">About</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="/gallery">Gallery</a>
            </li>
            {/* <li className="navbar__item">
              <a className="navbar__link" href="/services">Services</a>
            </li> */}
            <li className="navbar__item">
              <a className="navbar__link" href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header__hamburger" onClick={toggleMenu}>
          <span className="header__bar"></span>
          <span className="header__bar"></span>
          <span className="header__bar"></span>
        </div>
        <div className="ribbon">
          <div className="ribbon__content">
            <a className="ribbon__link" href="">Innovative Designs, Timeless Comfort.</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
