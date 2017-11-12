import React, { Component } from 'react'
import Immutable from 'seamless-immutable'
import { Trans } from 'react-i18next'

import * as api from '../API'
import HeroPageLayout from './HeroPageLayout'

export default class HeroPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroId: props.match.params.id,
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
      api.fetchHero({ id: this.state.heroId })
    )
  }

  handleHeroChange = (updatedField) => {
    const oldHero = this.state.hero
    let newJson = oldHero

    if (updatedField.profile) {
      newJson = Immutable.merge(oldHero, {
        profile: Immutable.merge(oldHero.profile, updatedField.profile)
      })
    } else if (updatedField.condition) {
      newJson = Immutable.merge(oldHero, {
        condition: Immutable.merge(oldHero.condition, updatedField.condition)
      })
    } else if (updatedField.protections) {
      newJson = Immutable.merge(oldHero, {
        protections: Immutable.merge(oldHero.protections, updatedField.protections)
      })
    } else if (updatedField.extra) {
      newJson = Immutable.merge(oldHero, {
        extra: updatedField.extra
      })
    }

    this.handleHeroResponse(
      api.updateHero({ id: this.state.heroId, hero: newJson })
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

    return (
      <HeroPageLayout 
        hero={hero}
        onHandleHeroChange={this.handleHeroChange}
      />
    )
  }
}