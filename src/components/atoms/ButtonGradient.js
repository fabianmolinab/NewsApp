/**
 * Este componente es un boton de tipo gradiente
 * */
import React  from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1.1em;
  background: #fff;
  border: 1.5px solid #333;
  color: #333;
  cursor: pointer;
  transition: all .3s;
  z-index: 3;
  border-radius: 10px;

  &:hover {
    color: #2d2d2d;
    font-weight: 600;
    border: none;
    background: linear-gradient(to right, #0CDFE8, #01FF7D, #5df54c);
  }
`;

const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 2;
  transform: scale(1.05, 1.2);
  border-radius: 10px;
`;

const BgGradient = styled( Bg )`
  z-index: 1;
  transform: scale(0.2, 1.4);
  transition: all .4s;
`;

const ContenedorBoton = styled.div`

  width: 150px;
  height: 40px;
  background: #fff;
  position: relative;
  border-radius: 10px;

  &:hover ${ BgGradient } {
    transform: scale(1.1, 1.4);
    background: linear-gradient(to right, #0CDFE8, #0ed46c, #5df54c);
  }
`;

export const ButtonGradient = ( { nombre, type } ) => {
  return (
      <>
        <ContenedorBoton>
          <Button type={ type }>
            { nombre }
          </Button>
          <Bg/>
          <BgGradient/>
        </ContenedorBoton>
      </>
  );
};
