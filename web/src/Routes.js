import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom' 

import HeroesPage from './containers/HeroesPage'
import HeroPage from './containers/HeroPage'

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={HeroesPage}/>
          <Route path='/heroes/:id' component={HeroPage}/>
        </Switch>
      </HashRouter>
    )
  }
}