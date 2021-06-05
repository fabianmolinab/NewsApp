import React              from 'react';
import styled             from 'styled-components';
import { ButtonGradient } from '../ui/ButtonGradient';

import { BoxLogin }    from '../styles/login/BoxLogin';
import { GlobalStyle } from '../styles/GlobalStyle';

const Header = styled.header`
  display: block;
  text-align: center;
  margin: 40px;
  box-sizing: border-box;
`;

export const LoginScreen = () => {
  return (
      <>
        <GlobalStyle/>
        <BoxLogin>
          <Header>
            <h2>Iniciar Sección en Segment</h2>
          </Header>
          <form>
            <div>
              <label>Correo Electronico</label>
              <input type="text"/>
            </div>
            <div>
              <label>Contraseña</label>
              <input type="text"/>
            </div>
            <ButtonGradient nombre="Iniciar Sección"/>
          </form>
        </BoxLogin>
      </>
  );
};
