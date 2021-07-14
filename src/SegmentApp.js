import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { GlobalStyle } from './styles/GlobalStyle';

export const SegmentApp = () => {

  return (
    <React.StrictMode>
      <GlobalStyle />
      <AppRouter />
    </React.StrictMode>
  );
};