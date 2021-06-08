import React                                      from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginScreen }                            from '../components/login/LoginScreen';
import { SignUp }                                 from '../components/signup/SignUp';
import { DashboardRoutes }                        from './DashboardRoutes';

export const AppRouter = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/login" component={ LoginScreen }/>

          <Route exact path="/signup" component={ SignUp }/>

          <Route path="/" component={ DashboardRoutes }/>
        </Switch>
      </Router>
  );
};