import React, { useState } from 'react';

import { useHistory }      from 'react-router-dom';
import { GlobalStyle }     from '../../styles/GlobalStyle';
import {
  ContendorFormulario,
  ContendorGlobal,
  ContenedorFlex,
  HeaderLogin,
  ImgIcon,
  ImgLogin,
}                          from '../../styles/LoginStyles';
import { ButtonGradient }  from '../ui/ButtonGradient';
import { Botton }          from '../ui/Botton';
import { InputFormulario } from '../ui/InputFormulario';
import { expresiones }     from '../../data/expresionesRegulares';

export const LoginScreen = () => {

  const [correo, cambiarCorreo] = useState( {
    campo: '', valido: null,
  } );
  const [password, cambiarPassword] = useState( {
    campo: '', valido: null,
  } );

  //Hook de React Router que nos permite tener acceso al History
  const history = useHistory();

  const handleLogin = ( e ) => {
    e.preventDefault();

    //Acá se realiza la validación de ambos formularios
    if ( correo.valido === 'true' && password.valido === 'true' ) {
      history.push( '/' );
    }
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
                    src="./assets/imgs/imagen-login.svg"
          />


          <ContendorFormulario onSubmit={ handleLogin }>
            <div>
              <ImgIcon src="./assets/imgs/segment-icon.svg"
                       alt="Icono Segment"
              />
            </div>
            <HeaderLogin>
              <h2>Iniciar Sección en Segment</h2>
            </HeaderLogin>

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

              <Botton onClick={ handleSignUp }>
                Crea una cuenta
              </Botton>
            </ContenedorFlex>
          </ContendorFormulario>

        </ContendorGlobal>
      </>
  );
};
