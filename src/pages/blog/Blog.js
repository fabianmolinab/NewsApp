import React from 'react';
import { BrowserRouter as Redirect, Route, Switch } from 'react-router-dom';
import { SeccionDestacados } from './SeccionDestacados';
import { SeccionNuevo } from './SeccionNuevo';
import { HeaderBlog } from '../../components/molecules/HeaderBlog';

export const Blog = () => {

  return (
      <>
        <HeaderBlog/>
        <div>
          <Switch>
            <Route exact path="/blog" component={ Blog }/>
            <Route exact path="/blog/destacados"
                   component={ SeccionDestacados }/>
            <Route exact path="/blog/nuevo" component={ SeccionNuevo }/>
            <Redirect to="/blog"/>
          </Switch>
        </div>
      </>
  );
};

