import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (

    <nav>
      <NavLink to="/blog/nuevo">
        Lo nuevo
      </NavLink>

      <NavLink to="/blog/destacado">
        Destacado
      </NavLink>

      <NavLink to="/blog/podcasts/">
        Podcasts
      </NavLink>

    </nav>
  );
};

