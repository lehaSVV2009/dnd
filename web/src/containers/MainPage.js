import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import { Trans } from 'react-i18next'

import DayPage from './DayPage'
import HeroPage from './HeroPage'

export default class MainPage extends Component {
  render() {
    const { heroId } = this.props

    if (!heroId) {
      return (<Trans>Герой отсутствует</Trans>)
    }

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} md={4} lg={3}>
          <HeroPage heroId={heroId}/>
        </Grid>
        <Grid item xs={12} md={4} lg={6}>
          <DayPage heroId={heroId}/>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <HeroPage heroId={heroId}/>
        </Grid>
      </Grid>
    )
  }
}