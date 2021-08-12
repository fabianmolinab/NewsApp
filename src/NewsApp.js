import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { GlobalStyle } from './styles/GlobalStyle';

export const NewsApp = () => {

  return (
      <React.StrictMode>
        <GlobalStyle/>
        <AppRouter/>
      </React.StrictMode>
  );
};