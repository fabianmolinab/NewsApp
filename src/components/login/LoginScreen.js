import React from 'react';

import { useHistory } from 'react-router-dom';
import { useForm }    from '../../hooks/useForm';

import { GlobalStyle }    from '../styles/GlobalStyle';
import {
  ContendorFormulario,
  ContendorGlobal,
  ContendorLogin,
  ContenedorFlex,
  ContenedorInput,
  Header,
  ImgLogin,
}                         from '../styles/login/LoginStyles';
import { ButtonGradient } from '../ui/ButtonGradient';
import { Botton }         from '../ui/Botton';

export const LoginScreen = () => {

  //Custom hook que maneja el formulario del correo
  const [values, handleInputChange] = useForm( {
    formValues: '',
  } );

  const { formValues } = values;

  //Hook de React Router que nos permite tener acceso al History
  const history = useHistory();

  const handleLogin = ( e ) => {
    e.preventDefault();

  };

  //Acción del boton para llevar a la pagina de Registrate
  const handleSignUp = () => {
    history.push( '/signup' );
  };

  // Comprobaciones
  const ComprobacionesLogin = () => {

  };

  return (
      <>
        <GlobalStyle/>

        <ContendorGlobal>
          <ImgLogin alt="Imagen Login"
                    src="./assets/imgs/imagen-login.svg"/>
          <ContendorLogin>

            <Header>
              <h2>Iniciar Sección en Segment</h2>
            </Header>

            <ContendorFormulario onSubmit={ handleLogin }>

              <ContenedorInput>
                <label>Correo Electronico</label>
                <input type="text"
                       placeholder="correo@dominio.com"
                       autoComplete="off"
                       name="formValues"
                       onChange={ handleInputChange }
                       value={ formValues }
                />
              </ContenedorInput>

              <ContenedorInput>
                <label>Contraseña</label>
                <input type="password"
                       placeholder="Ingrese la contraseña"
                />
              </ContenedorInput>

              <ContenedorFlex>
                <ButtonGradient type="submit"
                                nombre="Iniciar Sección"/>

                <Botton onClick={ handleSignUp }>
                  Registrate
                </Botton>
              </ContenedorFlex>


            </ContendorFormulario>

          </ContendorLogin>


        </ContendorGlobal>
      </>
  );
};
