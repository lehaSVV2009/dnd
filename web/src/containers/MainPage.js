import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import { Trans } from 'react-i18next'

import * as api from '../API'
import DayPage from './DayPage'
import Condition from '../components/Condition'
import Profile from '../components/Profile'
import SkillsList from '../components/SkillsList'
import TalentsList from '../components/TalentsList'

export default class MainPage extends Component {
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
      <Grid container spacing={24}>
        <Grid item xs={12} md={4} lg={3}>
          <Profile
            profile={hero.profile}
            onChange={this.handleHeroChange}
          />
          <br/>
          <SkillsList
            characteristics={hero.characteristics}
            skills={hero.skills}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={6}>
          <DayPage heroId={hero.id}/>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Condition
            condition={hero.condition}
            protections={hero.protections}
            onChange={this.handleHeroChange}
          />
          <br/>
          <TalentsList
            talents={hero.talents}
          />
        </Grid>
      </Grid>
    )
  }
}