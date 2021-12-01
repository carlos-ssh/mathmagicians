import React from 'react';
import './Calculator.css';

const NavBar = () => (
  <>
    <header>
      <nav className="navbar" href="#home">
        <a className="navbar-brand" href="#a">🔮 Math Magicians</a>
        <ul className="nav-ul">
          <li className="nav-li">
            <a className="nav-li" href="#a">Home</a>
          </li>
          <li className="nav-li">
            <a className="nav-li" href="#b">Calculator</a>
          </li>
          <li className="nav-li">
            <a className="nav-li" href="#Myself">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default NavBar;
