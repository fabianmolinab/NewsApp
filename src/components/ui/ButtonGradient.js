import React                         from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  &* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1.1em;
  background: #fff;
  border: 1.5px solid #333;
  color: #333;
  cursor: pointer;
  transition: all .4s;
  z-index: 3;

  &:hover {
    color: #fff;
    border: none;
    background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
  }
`;

const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 2;
  transform: scale(1.05, 1.2);

`;

const BgGradient = styled( Bg )`
  z-index: 1;
  transform: scale(0.2, 1.4);
  transition: all .4s;

`;

const Contenedor = styled.div`
  width: 150px;
  height: 40px;
  background: #fff;
  position: relative;

  &:hover ${ BgGradient } {
    transform: scale(1.1, 1.4);
    background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
  }
`;

export const ButtonGradient = ( { nombre } ) => {
  return (
      <>
        <GlobalStyle/>
        <Contenedor>
          <Button>
            { nombre }
          </Button>
          <Bg/>
          <BgGradient/>
        </Contenedor>
      </>
  );
};
