/**
 Este es el componente que genera la pagina de Login
 */

import React, { useState } from 'react';

import { useHistory }      from 'react-router-dom';
import { GlobalStyle }     from '../../styles/GlobalStyle';
import {
  ContendorFormulario,
  ContendorGlobal,
  ContenedorFlex,
}                          from './LoginStyles';
import { ButtonGradient }  from '../../components/atoms/ButtonGradient';
import { Botton }          from '../../components/atoms/Botton';
import { InputFormulario } from '../../components/molecules/InputFormulario';
import { expresiones }     from '../../const/expresionesRegulares';
import { Logo }            from '../../components/atoms/Logo';
import { ImgLogin }        from '../../components/atoms/ImgLogin';
import { HeaderForm }      from '../../components/atoms/HeaderForm';

export const LoginScreen = () => {

  //Este hook es para manejar el formulario de Correo
  const [correo, cambiarCorreo] = useState( {
    campo: '', valido: null,
  } );

  //Este hook es para manejar el formulario de Contraseña
  const [password, cambiarPassword] = useState( {
    campo: '', valido: null,
  } );

  //Hook de React Router que nos permite tener acceso al History
  const history = useHistory();

  const handleLogin = ( e ) => {
    e.preventDefault();

    //Acá se realiza la validación de ambos formularios y redirija a '/'
    if ( correo.valido === 'true' && password.valido === 'true' ) {
      history.push( '/' );
    }
  };

  const handleSignUp = () => {
    history.push( '/signup' );
  };

  return (
      <>
        <GlobalStyle/>

        <ContendorGlobal>
          <ImgLogin/>

          <ContendorFormulario onSubmit={ handleLogin }>
            <div>
              <Logo/>
            </div>
            <HeaderForm content="Inicia Sección en Segment"
                        marginB_30
            />


            <InputFormulario estado={ correo }
                             cambiarEstado={ cambiarCorreo }
                             name="Correo Electronico"
                             type="text"
                             error="Tienes un error en el correo"
                             placeholder="correo@domino.com"
                             expresionRegular={ expresiones.correo }
            />

            <InputFormulario estado={ password }
                             cambiarEstado={ cambiarPassword }
                             name="Contraseña"
                             type="password"
                             error="Tienes un error en la contraseña"
                             placeholder="Contraseña"
                             expresionRegular={ expresiones.password }
            />
            <ContenedorFlex>
              <ButtonGradient type="submit"
                              nombre="Iniciar Sección"/>

              <Botton onClick={ handleSignUp } nombre="Crea una Cuenta"/>
            </ContenedorFlex>
          </ContendorFormulario>

        </ContendorGlobal>
      </>
  );
};