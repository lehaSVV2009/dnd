import React, { Component } from 'react'
import IconAccount from 'material-ui-icons/AccountCircle'
import IconFire from 'material-ui-icons/Whatshot'
import IconSchool from 'material-ui-icons/School'
import { Trans } from 'react-i18next'

import Footer from '../components/Footer'
import PageWrapper from '../components/PageWrapper'
import ProfilePage from './ProfilePage'
import SkillsPage from './SkillsPage'
import TalentsPage from './TalentsPage'

const iconAccount = <IconAccount/>
const iconFire = <IconFire/>
const iconSchool = <IconSchool/>

export default class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'profile'
    }
  }

  handleHeroChange = (newJson) => this.props.onHeroChange(newJson)
  handleAccountTabClick = () => this.setState({ page: 'profile' })
  handleSkillsTabClick = () => this.setState({ page: 'skills' })
  handleTalentsTabClick = () => this.setState({ page: 'talents' })
  
  createFooterButtons = () => {
    return [{
      icon: iconAccount,
      onClick: this.handleAccountTabClick,
      label: <Trans>Профиль</Trans>
    }, {
      icon: iconSchool,
      onClick: this.handleSkillsTabClick,
      label: <Trans>Навыки</Trans>
    }, {
      icon: iconFire,
      onClick: this.handleTalentsTabClick,
      label: <Trans>Таланты</Trans>
    }]
  }

  render() {
    const { hero } = this.props

    if (!hero) {
      return (<Trans>Герой отсутствует</Trans>)
    }

    return (
      <div>
        <PageWrapper>
          {
            this.state.page === 'profile' &&
            <ProfilePage
              profile={hero.profile}
              condition={hero.condition}
              protections={hero.protections}              
              onChange={this.handleHeroChange}
            />
          }
          {
            this.state.page === 'skills' &&
            <SkillsPage
              characteristics={hero.characteristics}
              skills={hero.skills}
            />
          }
          {
            this.state.page === 'talents' &&
            <TalentsPage
              talents={hero.talents}
              onUseTalent={this.handleHeroChange}
            />
          }
        </PageWrapper>
        <Footer buttons={this.createFooterButtons()}/>
      </div>
    )
  }
}