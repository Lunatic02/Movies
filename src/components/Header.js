import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div>
          <h1>
            <NavLink to="/Movies" end>
              Should i <span>watch?</span>
            </NavLink>
          </h1>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/Movies" end>
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
