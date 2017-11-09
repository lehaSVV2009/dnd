import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom' 

import Header from './components/Header'
import HeroesPage from './containers/HeroesPage'
import HeroPage from './containers/HeroPage'

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <AppRoute exact path='/' component={HeroesPage}/>
          <AppRoute path='/heroes/:id' component={HeroPage}/>
        </Switch>
      </HashRouter>
    )
  }
}

const AppRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <Header/>
        <br/>
        <Component {...matchProps} />
      </div>
    )}/>
  )
}