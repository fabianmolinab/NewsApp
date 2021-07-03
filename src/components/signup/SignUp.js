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
import InputCheckbox       from '../ui/InputCheckbox';

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

  //Checked de Terminos y Condiciones
  const [terminos, cambiarTerminos] = useState( { checked: false } );

  //Estado para mostrar o no aviso el envio del formulario
  const [mensajeConfirmacion, cambiarMensajeConfirmacion] = useState( 'false' );

  //Validaciones de todos los campos del formulario
  const handleLogin = ( e ) => {
    e.preventDefault();

    if ( correo1.campo === correo2.campo && password1.campo ===
        password2.campo ) {
      if ( nombre.valido === 'true' && correo1.valido === 'true' &&
          correo2.valido === 'true' && password1.valido === 'true' &&
          password2.valido === 'true' && terminos.checked === true ) {
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
                               name="Nombre de Usuario"
                               type="text"
                               error="Tienes un error con el nombre de usuario"
                               placeholder="Su nombre de usuario"
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

            <div>
              <InputCheckbox estado={ terminos }
                             cambiarEstado={ cambiarTerminos }
              />
              <label>Esta de acuerdo con la politica de <a>Terminos y
                condiciones</a></label>
            </div>

            <Botton type="submit">Crear Cuenta</Botton>

            <RegistroEnviado mensaje={ mensajeConfirmacion }>
              Registro confirmado, revisa tu correo electronico para terminar el
              registro
            </RegistroEnviado>

          </ContenedorSignup>

          <p>¿Ya tienes una cuenta? <a>Inicia Sección</a></p>


        </ContendorGlobal>
      </>
  )
      ;
};
