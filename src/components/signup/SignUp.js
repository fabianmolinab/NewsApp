import React, { useState } from 'react';

import { GlobalStyle }     from '../../styles/GlobalStyle';
import { ContendorGlobal } from '../../styles/LoginStyles';
import { InputFormulario } from '../ui/InputFormulario';
import { expresiones }     from '../../const/expresionesRegulares';
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

  //Hook que cambia el estado del checkbox de terminos y condiciones
  const [terminos, cambiarTerminos] = useState( { checked: false } );

  /*Hook que cambia el estado para mostrar o no aviso despues del envio de el formulario

  * Correcto: Es cuando el formulario cumple con todas las condiciones y el mensaje que se envia es el correcto.
  *
  * Fallido: Es cuando alguno de los parametros del formulario falla y el mensaje que se muestra es el incorrecto.
  * */

  const [mensajeConfirmacion, cambiarMensajeConfirmacion] = useState( {
    correcto: 'false', fallido: 'false',
  } );

  //Validaciones de todos los campos del formulario
  const handleLogin = ( e ) => {
    e.preventDefault();

    // Este es el primer condicional que valida cada input del formulario

    if ( nombre.valido === 'true' && correo1.valido === 'true' &&
        correo2.valido === 'true' && password1.valido === 'true' &&
        password2.valido === 'true' && terminos.checked === true ) {

      /*Segunda condicion que valida que los campos de correo y de contraseña sean iguales */
      if ( correo1.campo === correo2.campo && password1.campo ===
          password2.campo ) {

        cambiarMensajeConfirmacion( {
          correcto: 'true', fallido: 'false',
        } );

      } else {
        cambiarMensajeConfirmacion( {
          correcto: 'false', fallido: 'true',
        } );
      }
    } else {
      cambiarMensajeConfirmacion( {
        correcto: 'false', fallido: 'true',
      } );
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
            <Botton type="submit">Crear Cuenta</Botton>
          </ContenedorSignup>

          <div>
            <InputCheckbox estado={ terminos }
                           cambiarEstado={ cambiarTerminos }
                           name="condiciones"
            />
            <label>Esta de acuerdo con la politica de <a>Terminos
              y condiciones</a>
            </label>
          </div>


          <div>
            {
              ( mensajeConfirmacion.correcto === 'true' &&
                  mensajeConfirmacion.fallido === 'false' )
                  ?
                  <RegistroEnviado mensaje={ mensajeConfirmacion.correcto }>
                    Un mensaje fue enviado a su email para confirmar el registro
                  </RegistroEnviado>
                  : ( mensajeConfirmacion.correcto === 'false' &&
                  mensajeConfirmacion.fallido === 'true' )
                  ?
                  <RegistroEnviado mensaje={ mensajeConfirmacion.fallido }>
                    Le falto alguno de los cambios
                  </RegistroEnviado>
                  :
                  <RegistroEnviado mensaje={ mensajeConfirmacion.fallido }/>

            }
          </div>

          <p>¿Ya tienes una cuenta? <a>Inicia Sección</a></p>


        </ContendorGlobal>
      </>
  )
      ;
};
