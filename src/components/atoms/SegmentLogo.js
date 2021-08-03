import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../const/device';

export const SegmentLogo = () => {
  return (

      <Nav to="/">

        <ImgLogo src="./assets/imgs/segment-logo.svg"
                 alt="Logo Segment"
        />

      </Nav>

  );
};

const Nav = styled (NavLink)`
  width: auto;
  height: auto;
`;

const ImgLogo = styled.img`

  height: 80%;
  

  @media ${ device.laptop } {
    width: auto;
  }

`;