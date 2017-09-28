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
  componentDidMount() {
    this.setState({ hero: null, heroLoading: true, error: null })
    api.fetchHero({ id: '1' })
      .then((response) => {
        this.setState({ hero: response.data, heroLoading: false })
      })
      .catch((error) => {
        this.setState({ hero: null, heroLoading: false, error: error.toString() })            
      })
  }

  render() {
    // Show loading bar if HTTP request is not completed
    if (this.state.heroLoading) {
      return (<div>Loading...</div>)
    }

    // Show error if HTTP request failed
    if (this.state.error) {
      return (<div>{this.state.error}</div>)
    }

    if (!this.state.hero) {
      return (<div>Герой отсутствует</div>)
    }

    return (
      <PageWrapper>
        <ProfilePage
          profile={this.state.hero}
        />
        <br/>
        <ConditionPage
          condition={this.state.hero.condition}
        />
        <br/>
        <CharacteristicsPage
          characteristics={this.state.hero.characteristics}
        />
        <br/>
        <SkillsPage
          skills={this.state.hero.skills}
        />
        <br/>
        <TalentsPage/>
      </PageWrapper>
    )
  }
}