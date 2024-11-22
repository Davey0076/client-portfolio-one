import React from 'react';
import './Header.css';
import siteLogo from '../../assets/topTutors.png'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={siteLogo} alt="toptutor logo" className='img-logo'/>
        
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#guarantee">Guarantee</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
