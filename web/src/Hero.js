import React, { Component } from 'react'
import { Trans } from 'react-i18next'

import * as api from './API'
import MainPage from './containers/MainPage'

export default class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hero: null,
      heroLoading: false,
      error: null
    }
  }

  /**
   * Load when component is created.
   */
  componentDidMount = () => {
    this.setState({ hero: null, heroLoading: true, error: null })
    this.handleHeroResponse(
      api.fetchHero({ id: this.props.id })
    )
  }

  handleHeroChange = (newJson) => {
    this.handleHeroResponse(
      api.patchHero({ id: this.props.id, hero: newJson })      
    )
  }

  handleHeroResponse = (promise) => {
    promise
      .then((response) => {
        this.setState({ hero: response.data, heroLoading: false, error: null })
      })
      .catch((error) => {
        this.setState({ hero: null, heroLoading: false, error: error.toString() })            
      })
  }

  render() {
    const { hero, heroLoading, error } = this.state
    
    // Show loading bar if HTTP request is not completed
    if (heroLoading) {
      return (<Trans>Загрузка</Trans>)
    }

    // Show error if HTTP request failed
    if (error) {
      return (<div>{error}</div>)
    }

    if (!hero) {
      return (<Trans>Герой отсутствует</Trans>)
    }

    return (
      <MainPage 
        hero={hero}
        onHeroChange={this.handleHeroChange}
      />
    )
  }
}