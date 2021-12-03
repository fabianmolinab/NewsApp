import React from 'react'
import { NewContextProvider } from './context/NewContext'
import { AppRouter } from './routers/AppRouter'
import { GlobalStyle } from './styles/GlobalStyle'

export const NewsApp = () => {
  return (
    <NewContextProvider>
      <React.StrictMode>
        <GlobalStyle />
        <AppRouter />
      </React.StrictMode>
    </NewContextProvider>
  )
}
