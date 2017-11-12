import React, { Component } from 'react'
import { Trans } from 'react-i18next'

import Header from '../components/Header'
import HeroList from '../components/HeroList'

class HeroesPageLayout extends Component {
  handlePlay = (hero) => this.props.onPlay(hero)
  handleDelete = (hero) => this.props.onDelete(hero)

  render() {
    const { heroes } = this.props

    if (!heroes) {
      return (<Trans>Герои отсутствует</Trans>)
    }

    return (
      <div>
        <Header/>
        <HeroList
          heroes={heroes}
          onPlay={this.handlePlay}
          onDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default HeroesPageLayout