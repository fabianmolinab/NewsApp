/**
 * Pagina de Registrate
 * */
import React, { useState } from 'react';
import { Link }            from 'react-router-dom';

import { GlobalStyle }     from '../../styles/GlobalStyle';
import { ContendorGlobal } from '../login/LoginStyles';
import { InputFormulario } from '../../components/molecules/InputFormulario';
import { expresiones }     from '../../const/expresionesRegulares';
import {
  ContenedorGridC2,
  FormGrid,
  RegistroEnviado,
}                          from './SignUpStyles';
import { Botton }          from '../../components/atoms/Botton';
import { InputCheckbox }   from '../../components/atoms/InputCheckbox';
import { HeaderForm }      from '../../components/atoms/HeaderForm';
import { Logo }            from '../../components/atoms/Logo';
import { ImgSignup }       from '../../components/atoms/ImgSignup';

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

  /** Hook que cambia el estado para mostrar o no aviso despues del envio de el formulario
   * Correcto: Es cuando el formulario cumple con todas las condiciones y el mensaje que se envia es el correcto.

   * Fallido: Es cuando alguno de los parametros del formulario falla y el mensaje que se muestra es el incorrecto.
   */

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

      /*Segunda condicion que valida que los campos de correo y de contraseña son iguales */
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

          <ImgSignup/>

          <FormGrid onSubmit={ handleLogin }>

            <ContenedorGridC2 flex>
              <Logo grid/>
              <HeaderForm content="Registrate en Segment" grid/>
            </ContenedorGridC2>

            <ContenedorGridC2>
              <InputFormulario estado={ nombre }
                               cambiarEstado={ cambiarNombre }
                               name="Nombre de Usuario"
                               type="text"
                               error="No puede llevar espacios, ni acentos"
                               placeholder="Su nombre de usuario"
                               expresionRegular={ expresiones.nombre }
              />
            </ContenedorGridC2>

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
                             error="Debe tener de 4 a 12 digitos"
                             placeholder="Digite su contraseña"
                             expresionRegular={ expresiones.password }
            />

            <InputFormulario estado={ password2 }
                             cambiarEstado={ cambiarPassword2 }
                             name="Confirma tu Contraseña"
                             type="password"
                             error="Debe tener de 4 a 12 digitos"
                             placeholder="Contraseña"
                             expresionRegular={ expresiones.password }
            />
            <ContenedorGridC2>
              <InputCheckbox estado={ terminos }
                             cambiarEstado={ cambiarTerminos }
                             id="condiciones"
              />
              <label htmlFor="condiciones">Esta de acuerdo con la politica
                de <Link to="/terminos">Terminos
                  y condiciones</Link>
              </label>
            </ContenedorGridC2>

            <Botton type="submit" nombre="Crear Cuenta"/>

            <p>¿Ya tienes una cuenta? <a>Inicia Sección</a></p>

            <div>
              {
                ( mensajeConfirmacion.correcto === 'true' &&
                    mensajeConfirmacion.fallido === 'false' )
                    ?

                    <RegistroEnviado mensaje={ mensajeConfirmacion.correcto }>
                      Un mensaje fue enviado a su email para confirmar el
                      registro
                    </RegistroEnviado>

                    : ( mensajeConfirmacion.correcto === 'false' &&
                    mensajeConfirmacion.fallido === 'true' )
                    ?

                    <RegistroEnviado mensaje={ mensajeConfirmacion.fallido }
                                     fallido>
                      Le falto alguno de los cambios
                    </RegistroEnviado>

                    :
                    <RegistroEnviado mensaje={ mensajeConfirmacion.fallido }
                                     fallido/>

              }
            </div>

          </FormGrid>


        </ContendorGlobal>

      </>
  )
      ;
};
