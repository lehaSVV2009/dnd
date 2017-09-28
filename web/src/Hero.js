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
    api.fetchHero({ id: 'Alex' })
      .then((response) => {
        this.setState({ hero: response.data, heroLoading: false })
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