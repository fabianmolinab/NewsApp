import React, { useState } from 'react';

import { GlobalStyle }     from '../../styles/GlobalStyle';
import { ContendorGlobal } from '../../styles/LoginStyles';
import { InputFormulario } from '../ui/InputFormulario';
import { expresiones }     from '../../data/expresionesRegulares';
import {
  ContenedorName,
  ContenedorSignup,
  RegistroEnviado,
}                          from '../../styles/SignUpStyles';
import { Botton }          from '../ui/Botton';

export const SignUp = () => {
  const [nombre, cambiarNombre] = useState( {
    campo: '', valido: null,
  } );

  const [correo1, cambiarCorreo1] = useState( {
    campo: '', valido: null,
  } );

  const [correo2, cambiarCorreo2] = useState( {
    campo: '', valido: null,
  } );

  const [password1, cambiarPassword1] = useState( {
    campo: '', valido: null,
  } );

  const [password2, cambiarPassword2] = useState( {
    campo: '', valido: null,
  } );

  //Estado para mostrar o no el envio del formulario
  const [mensajeConfirmacion, cambiarMensajeConfirmacion] = useState( 'false' );

  //Validaciones de todos los campos del formulario
  const handleLogin = ( e ) => {
    e.preventDefault();

    if ( correo1.campo === correo2.campo && password1.campo ===
        password2.campo ) {
      if ( nombre.valido === 'true' && correo1.valido === 'true' &&
          correo2.valido === 'true' && password1.valido === 'true' &&
          password2.valido === 'true' ) {
        cambiarMensajeConfirmacion( 'true' );
      }
    }
  };

  return (
      <>
        <GlobalStyle/>

        <ContendorGlobal signup>

          <ContenedorSignup onSubmit={ handleLogin }>

            <ContenedorName>
              <InputFormulario estado={ nombre }
                               cambiarEstado={ cambiarNombre }
                               name="Nombre"
                               type="text"
                               error="Tienes que ingresar tu nombre"
                               placeholder="Su nombre completo"
                               expresionRegular={ expresiones.nombre }
              />
            </ContenedorName>

            <InputFormulario estado={ correo1 }
                             cambiarEstado={ cambiarCorreo1 }
                             name="Correo Electronico"
                             type="text"
                             error="Tienes un error en el correo"
                             placeholder="correo@domino.com"
                             expresionRegular={ expresiones.correo }
            />

            <InputFormulario estado={ correo2 }
                             cambiarEstado={ cambiarCorreo2 }
                             name="Confirma tu correo electronico"
                             type="text"
                             error="Tienes un error en el correo"
                             placeholder="correo@domino.com"
                             expresionRegular={ expresiones.correo }
            />

            <InputFormulario estado={ password1 }
                             cambiarEstado={ cambiarPassword1 }
                             name="Contraseña"
                             type="password"
                             error="Tienes un error en la contraseña"
                             placeholder="Contraseña"
                             expresionRegular={ expresiones.password }
            />

            <InputFormulario estado={ password2 }
                             cambiarEstado={ cambiarPassword2 }
                             name="Confirma tu Contraseña"
                             type="password"
                             error="Tienes un error en la contraseña"
                             placeholder="Contraseña"
                             expresionRegular={ expresiones.password }
            />

            <Botton type="submit">Registrate</Botton>
            <RegistroEnviado mensaje={ mensajeConfirmacion }>
              Registro confirmado, revisa tu correo electronico para terminar el
              registro
            </RegistroEnviado>

          </ContenedorSignup>


        </ContendorGlobal>
      </>
  )
      ;
};
