import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../pages/login/LoginScreen';
import { SignUp } from '../pages/signup/SignUp';
import { Terminos } from '../pages/terminos/Terminos';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/login" component={ LoginScreen }/>
          <Route exact path="/signup" component={ SignUp }/>
          <Route exact path="/terminos" component={ Terminos }/>
          <Route path="/" component={ DashboardRoutes }/>
        </Switch>
      </Router>
  );
};