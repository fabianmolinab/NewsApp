import React from 'react';
import {
  BrowserRouter as Redirect, Route, Switch,
} from 'react-router-dom';
import { Logo } from '../../components/atoms/Logo';

import { NavBar } from '../../components/atoms/NavBar';
import { Botones } from '../../components/molecules/Botones';
import { SeccionDestacados } from './SeccionDestacados';
import { SeccionNuevo } from './SeccionNuevo';

export const Blog = () => {

  return (
    <>
      <header>
        <NavBar />
        <Logo />
        <Botones />
      </header>
      <div>
        <Switch>
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/destacados" component={SeccionDestacados} />
          <Route exact path="/blog/nuevo" component={SeccionNuevo} />
          <Redirect to="/blog" />
        </Switch>
      </div>
    </>
  );
};

