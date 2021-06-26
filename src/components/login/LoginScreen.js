import React, { useState } from 'react';

import { useHistory }      from 'react-router-dom';
import { GlobalStyle }     from '../styles/GlobalStyle';
import {
  ContendorFormulario,
  ContendorGlobal,
  ContenedorFlex,
  Header, ImgIcon,
  ImgLogin,
} from '../styles/login/LoginStyles';
import { ButtonGradient }  from '../ui/ButtonGradient';
import { Botton }          from '../ui/Botton';
import { InputFormulario } from './InputFormulario';

// Estas son expresiones regulares para realizar la validación
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

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
            <Header>
              <h2>Iniciar Sección en Segment</h2>
            </Header>

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
                Registrate
              </Botton>
            </ContenedorFlex>
          </ContendorFormulario>

        </ContendorGlobal>
      </>
  );
};
