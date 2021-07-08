import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
}            from 'react-router-dom';

import { Blog }         from '../components/home/Home';
import { BlogPodcasts } from '../components/home/BlogPodcasts';
//import { SignUp }       from '../components/signup/SignUp';

export const DashboardRoutes = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/blog" component={ Blog }/>
          <Route exact path="/blog/podcasts" component={ BlogPodcasts }/>
          <Redirect to="/blog"/>

        </Switch>

      </Router>
  );
};