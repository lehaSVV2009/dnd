import React, { Component } from 'react'
import { Trans } from 'react-i18next'
import { withRouter } from 'react-router-dom'

import * as api from '../API'
import HeroesPageLayout from './HeroesPageLayout'

class HeroesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroes: [],
      heroesLoading: false,
      error: null
    }
  }

  /**
   * Load when component is created.
   */
  componentDidMount = () => {
    this.setState({ heroes: [], heroesLoading: true, error: null })
    this.fetchHeroes()
  }

  handlePlay = (hero) => {
    this.props.history.push(`/heroes/${hero.id}`)
  }

  handleDelete = (hero) => {
    this.setState({ heroesLoading: true, error: null })
    this.deleteHero(hero.id)
  }

  fetchHeroes = () => {
    api.fetchHeroes()
      .then((response) => {
        this.setState({ heroes: response.data, heroesLoading: false, error: null })
      })
      .catch((error) => {
        this.setState({ heroes: null, heroesLoading: false, error: error.toString() })            
      })
  }

  deleteHero = (id) => {
    api.deleteHero({ id })
      .then((response) => {
        this.setState({ heroes: this.state.heroes.filter(hero => hero.id !== id), heroesLoading: false, error: null })
      })
      .catch((error) => {
        this.setState({ heroes: null, heroesLoading: false, error: error.toString() })            
      })
  }

  render() {
    const { heroes, heroesLoading, error } = this.state

    // Show loading bar if HTTP request is not completed
    if (heroesLoading) {
      return (<Trans>Загрузка</Trans>)
    }

    // Show error if HTTP request failed
    if (error) {
      return (<div>{error}</div>)
    }

    return (
      <HeroesPageLayout
        heroes={heroes}
        onPlay={this.handlePlay}
        onDelete={this.handleDelete}
      />
    )
  }
}

export default withRouter(HeroesPage)