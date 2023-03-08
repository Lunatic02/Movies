import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to="/" end>
        Movie Search
      </NavLink>
      <NavLink to="contato">Contato</NavLink>
    </div>
  );
};

export default Header;
