import React, { useState }  from 'react';
import { GlobalStyle }      from '../styles/GlobalStyle';
import { ContendorGlobal }  from '../styles/LoginStyles';
import { InputFormulario }  from '../login/InputFormulario';
import { expresiones }      from '../../data/expresionesRegulares';
import { ContenedorSignup } from '../styles/SignUpStyles';

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

  const [usuario, cambiarUsuario] = useState( {
    campo: '', valido: null,
  } );

  return (
      <>
        <GlobalStyle/>

        <ContendorGlobal signup>

          <h1> Gracias por querer registrarte en nuestra pagina </h1>
          <ContenedorSignup>

            <InputFormulario estado={ nombre }
                             cambiarEstado={ cambiarNombre }
                             name="Nombre"
                             type="text"
                             error="Tienes que ingresar tu nombre"
                             placeholder="Su nombre completo"
                             expresionRegular={ expresiones.nombre }
            />

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

            <InputFormulario estado={ usuario }
                             cambiarEstado={ cambiarUsuario }
                             name="Confirma tu Contraseña"
                             type="password"
                             error="Tienes un error en la contraseña"
                             placeholder="Contraseña"
                             expresionRegular={ expresiones.usuario }
            />

          </ContenedorSignup>
        </ContendorGlobal>
      </>
  )
      ;
};
