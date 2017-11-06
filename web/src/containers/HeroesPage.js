import React, { Component } from 'react'
import { Trans } from 'react-i18next'

import * as api from '../API'
import HeroList from '../components/HeroList'

export default class HeroesPage extends Component {
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

  fetchHeroes = () => {
    api.fetchHeroes()
      .then((response) => {
        this.setState({ heroes: response.data, heroesLoading: false, error: null })
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

    if (!heroes) {
      return (<Trans>Герои отсутствует</Trans>)
    }

    return (
      <HeroList heroes={heroes}/>
    )
  }
}