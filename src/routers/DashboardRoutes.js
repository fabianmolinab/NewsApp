import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
}            from 'react-router-dom';

import { Blog } from '../components/blog/Blog';
import { BlogPodcasts } from '../components/blog/BlogPodcasts';

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