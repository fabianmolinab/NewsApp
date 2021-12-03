/**
 Este es el componente que genera la pagina de Login
 */

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Botton } from '../../components/atoms/Botton'
import { ButtonGradient } from '../../components/atoms/ButtonGradient'
import { HeaderForm } from '../../components/atoms/HeaderForm'
import { ImgLogin } from '../../components/atoms/ImgLogin'
import { InputFormulario } from '../../components/molecules/InputFormulario'
import { expresiones } from '../../const/expresionesRegulares'
import {
  ContendorFormulario,
  ContendorGlobal,
  ContenedorFlex
} from './LoginStyles'

export const LoginScreen = () => {
  // Este hook es para manejar el formulario de Correo
  const [correo, cambiarCorreo] = useState({
    campo: '',
    valido: null
  })

  const [password, cambiarPassword] = useState({
    campo: '',
    valido: null
  })

  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()

    // Acá se realiza la validación de ambos formularios y redirija a '/'
    if (correo.valido === 'true' && password.valido === 'true') {
      history.push('/')
    }
  }

  const handleSignUp = () => {
    history.push('/signup')
  }

  return (
    <>
      <ContendorGlobal>
        <ImgLogin />

        <ContendorFormulario onSubmit={handleLogin}>
          <HeaderForm content="Inicia Sección en NewsApp" marginB_30 />

          <InputFormulario
            estado={correo}
            cambiarEstado={cambiarCorreo}
            name="Correo Electronico"
            type="text"
            error="Tienes un error en el correo"
            expresionRegular={expresiones.correo}
          />

          <InputFormulario
            estado={password}
            cambiarEstado={cambiarPassword}
            name="Contraseña"
            type="password"
            error="Tienes un error en la contraseña"
            expresionRegular={expresiones.password}
          />
          <ContenedorFlex>
            <ButtonGradient type="submit" nombre="Iniciar Sección" />

            <Botton onClick={handleSignUp} nombre="Registrate" />
          </ContenedorFlex>
        </ContendorFormulario>
      </ContendorGlobal>
    </>
  )
}
