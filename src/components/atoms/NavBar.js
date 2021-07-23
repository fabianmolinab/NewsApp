import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (

      <nav>
        <Nav to="/blog/nuevo">
          Lo nuevo
        </Nav>

        <Nav to="/blog/destacado">
          Destacado
        </Nav>

        <Nav to="/blog/podcasts/">
          Podcasts
        </Nav>

      </nav>
  );
};

const Nav = styled (NavLink)`
  display: flex;



`;

