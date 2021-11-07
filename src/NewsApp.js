import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { GlobalStyle } from './styles/GlobalStyle';
import { NewContextProvider } from './context/NewContext';

export const NewsApp = () => {

  return (
      <NewContextProvider>
        <React.StrictMode>
          <GlobalStyle/>
          <AppRouter/>
        </React.StrictMode>
      </NewContextProvider>
  );
};