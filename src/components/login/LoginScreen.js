import React              from 'react';
import styled             from 'styled-components';
import { ButtonGradient } from '../ui/ButtonGradient';

import { BoxLogin }    from '../styles/login/BoxLogin';
import { GlobalStyle } from '../styles/GlobalStyle';

const CajaGlobal = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  height: 100%;
`;

const ImgLogin = styled.img`
  height: 600px;
  width: 49.5%;
  order: 0;
`;

const Header = styled.header`
  text-align: center;
  margin: 40px;
  box-sizing: border-box;
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-height: 300px;
  height: 100%;

`;

const Contenedor = styled.div`
  height: 100px;
  font-size: 18px;
  font-weight: 600;
  align-items: center;

  label {
  }

  input {
    display: block;
    width: 60%;
    margin: 10px;
    padding: 10px 15px;
  }
`;
export const LoginScreen = () => {
  return (
      <>
        <GlobalStyle/>


        <CajaGlobal>
          <ImgLogin alt="Imagen Login"
                    src="./assets/imgs/imagen-login.svg"/>
          <BoxLogin>
            <Header>
              <h2>Iniciar Sección en Segment</h2>
            </Header>
            <FormLogin>
              <Contenedor>
                <label>Correo Electronico</label>
                <input type="text"/>
              </Contenedor>
              <Contenedor>
                <label>Contraseña</label>
                <input type="text"/>
              </Contenedor>
              <ButtonGradient nombre="Iniciar Sección"/>
            </FormLogin>
          </BoxLogin>
        </CajaGlobal>
      </>
  );
};
