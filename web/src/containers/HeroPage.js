import React, { Component } from 'react'
import { Trans } from 'react-i18next'

import * as api from '../API'
import ProfilePage from './ProfilePage'
import SkillsPage from './SkillsPage'
import TalentsPage from './TalentsPage'

export default class HeroPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroId: props.heroId,
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

  handleHeroChange = (newJson) => {
    this.handleHeroResponse(
      api.patchHero({ id: this.state.heroId, hero: newJson })      
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
      <div>
        <ProfilePage
          profile={hero.profile}
          condition={hero.condition}
          protections={hero.protections}              
          onChange={this.handleHeroChange}
        />
        <br/>
        <SkillsPage
          characteristics={hero.characteristics}
          skills={hero.skills}
        />
        <br/>
        <TalentsPage
          talents={hero._embedded.talents}
        />
      </div>
    )
  }
}