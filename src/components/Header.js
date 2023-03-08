import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div>
          <h1>
            Should i <span>watch?</span>
          </h1>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/" end>
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="contato">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
