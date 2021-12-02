import React from 'react';
import { TiThMenu } from 'react-icons/ti';
import './Calculator.css';

const NavBar = () => (
  <>
    <header>
      <nav className="navbar" href="#home">
        <a className="navbar-brand" href="/">🔮 Math Magicians</a>
        <ul className="nav-ul">
          <li className="nav-li">
            <a className="nav-li" href="/">Home</a>
          </li>
          <li className="nav-li">
            <a className="nav-li" href="/Calculator">| Calculator |</a>
          </li>
          <li className="nav-li">
            <a className="nav-li" href="/Myself">Contact me</a>
          </li>
        </ul>
        <div>
          <a className="a-ham" href="/">
            <TiThMenu />
          </a>
        </div>
      </nav>
    </header>
  </>
);

export default NavBar;
