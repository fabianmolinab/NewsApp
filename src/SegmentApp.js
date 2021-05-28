import React         from 'react';
import { AppRouter } from './routers/AppRouter';

export const SegmentApp = () => {

  return (
      <React.StrictMode>
        <AppRouter/>
      </React.StrictMode>
  );
};