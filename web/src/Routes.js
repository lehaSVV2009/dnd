import React, { Component } from 'react'

import HeroPage from './containers/HeroPage'
import HeroesPage from './containers/HeroesPage'

// TODO use react router here
export default class Routes extends Component {

  toHeroPage = (id) => {
    window.location.hash = id
    this.forceUpdate()
  }

  render() {
    const hash = window.location.hash
    if (hash) {
      return (<HeroPage heroId={hash.replace('#', '')}/>)
    }
    return (<HeroesPage onPlay={this.toHeroPage}/>)
  }
}