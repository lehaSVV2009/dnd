import React, { Component } from 'react'

import * as api from './API'
import CharacteristicsPage from './containers/CharacteristicsPage'
import ConditionPage from './containers/ConditionPage'
import PageWrapper from './components/PageWrapper'
import ProfilePage from './containers/ProfilePage'
import SkillsPage from './containers/SkillsPage'
import TalentsPage from './containers/TalentsPage'

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

  handleHealthChange = (value) => {
    this.handleHeroResponse(
      api.patchHero({ id: this.props.id, hero: { condition: { current_hit_points: value }}})      
    )
  }

  handleHealingsChange = (value) => {
    this.handleHeroResponse(
      api.patchHero({ id: this.props.id, hero: { condition: { healings: value }}})      
    )
  }

  handleDeathSavesChange = (value) => {
    this.handleHeroResponse(
      api.patchHero({ id: this.props.id, hero: { condition: { death_save_failures: value }}})      
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
      return (<div>Loading...</div>)
    }

    // Show error if HTTP request failed
    if (error) {
      return (<div>{error}</div>)
    }

    if (!hero) {
      return (<div>Герой отсутствует</div>)
    }

    return (
      <PageWrapper>
        <ProfilePage
          profile={hero.profile}
        />
        <br/>
        <ConditionPage
          condition={hero.condition}
          onHealthChange={this.handleHealthChange}
          onHealingsChange={this.handleHealingsChange}
          onDeathSavesChange={this.handleDeathSavesChange}
        />
        <br/>
        <CharacteristicsPage
          characteristics={hero.characteristics}
        />
        <br/>
        <SkillsPage
          skills={hero.skills}
        />
        <br/>
        <TalentsPage/>
      </PageWrapper>
    )
  }
}