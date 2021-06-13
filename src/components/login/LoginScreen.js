import React from 'react';

import { useHistory } from 'react-router-dom';

import { GlobalStyle }    from '../styles/GlobalStyle';
import {
  ContendorFormulario,
  ContendorGlobal,
  ContenedorFlex,
  Header,
  ImgLogin,
}                         from '../styles/login/LoginStyles';
import { ButtonGradient } from '../ui/ButtonGradient';
import { Botton }         from '../ui/Botton';

import InputFormulario from './InputFormulario';

export const LoginScreen = () => {

  //Hook de React Router que nos permite tener acceso al History
  const history = useHistory();

  const handleLogin = ( e ) => {
    e.preventDefault();

  };

  //Acción del boton para llevar a la pagina de Registrate
  const handleSignUp = () => {
    history.push( '/signup' );
  };

  return (
      <>
        <GlobalStyle/>

        <ContendorGlobal>
          <ImgLogin alt="Imagen Login"
                    src="./assets/imgs/imagen-login.svg"/>


          <ContendorFormulario onSubmit={ handleLogin }>

            <Header>
              <h2>Iniciar Sección en Segment</h2>
            </Header>

            <InputFormulario name="Correo Electronico"
                             type="text"
                             error="Tienes un error en el correo"
                             placeholder="correo@domino.com"
            />

            <InputFormulario name="Contraseña"
                             type="password"
                             error="Tienes un error en la contraseña"
                             placeholder="Contraseña"

            />

            <ContenedorFlex>
              <ButtonGradient type="submit"
                              nombre="Iniciar Sección"/>

              <Botton onClick={ handleSignUp }>
                Registrate
              </Botton>
            </ContenedorFlex>


          </ContendorFormulario>


        </ContendorGlobal>
      </>
  );
};
