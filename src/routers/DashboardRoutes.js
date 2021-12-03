import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Header } from '../components/molecules/Header'
import { Blog } from '../pages/blog/Blog'
import { SeccionDestacados } from '../pages/blog/destacados/SeccionDestacados'
import { SeccionNuevo } from '../pages/blog/nuevo/SeccionNuevo'
import { SeccionVideos } from '../pages/blog/videos/SeccionVideos'
import { SeccionPodcasts } from '../pages/blog/podcasts/SeccionPodcasts'

export const DashboardRoutes = () => {
  return (
      <>
        <Header/>

        <div>
          <Switch>

            <Route exact path="/blog" component={ Blog }/>
            <Route exact path="/nuevo" component={ SeccionNuevo }/>
            <Route exact path="/destacados" component={ SeccionDestacados }/>
            <Route exact path="/podcasts" component={ SeccionPodcasts }/>
            <Route exact path="/videos" component={ SeccionVideos }/>

            <Redirect to="/blog"/>
          </Switch>
        </div>
      </>
  )
}
