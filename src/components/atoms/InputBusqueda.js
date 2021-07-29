/*
 *
 * **/
import React from 'react';
import styled, { css } from 'styled-components';
import { device } from '../../const/device';
import { colores } from '../../styles/colores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const InputBusqueda = ( {menuNav} ) => {
  return (
      <ContenedorForm menuNav={ menuNav }>
        <button>
          <FontAwesomeIcon icon={ faSearch }/>
        </button>
        <Input
            placeholder="Busca un articulo"
        />


      </ContenedorForm>

  );
};

const ContenedorForm = styled.form`

  display: none;
  max-width: 90%;
  background-color: ${ colores.blanco };
  padding: 8px 16px;
  margin-top: 15px;
  position: relative;
  border-radius: 8px;
  border: none;

  button {
    padding: 0;
    border: 0 none;
    background-color: transparent;
    color: ${ colores.marronOscuro };
    margin-right: 10px;
  }

  @media ${ device.laptop } {
    display: flex;
    margin: 0;
  }

  ${ props => props.menuNav && css`
    display: flex;

    @media ${ device.laptop } {
      display: none;
    }
  ` }
`;

const Input = styled.input`
  //position: absolute;
  width: 90%;
  padding: 6px;
  border: none;
  background-color: ${ colores.blanco };

`;


