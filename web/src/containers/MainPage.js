import React, { Component } from 'react'
import { Trans } from 'react-i18next'

import DayPage from './DayPage'
import HeroPage from './HeroPage'
import PageWrapper from '../components/PageWrapper'

export default class MainPage extends Component {
  render() {
    const { heroId } = this.props

    if (!heroId) {
      return (<Trans>Герой отсутствует</Trans>)
    }

    return (
      <PageWrapper>
        <DayPage heroId={heroId}/>
        <HeroPage heroId={heroId}/>
      </PageWrapper>
    )
  }
}