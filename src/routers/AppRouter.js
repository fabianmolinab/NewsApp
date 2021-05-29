import React                                      from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginScreen }                            from '../components/login/LoginScreen';

export const AppRouter = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginScreen}/>
        </Switch>

      </Router>
  );
};

