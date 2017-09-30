import React, { Component } from 'react'
import IconAccount from 'material-ui/svg-icons/action/account-circle'
import IconFire from 'material-ui/svg-icons/social/whatshot'
import IconHealth from 'material-ui/svg-icons/action/favorite'
import IconSchool from 'material-ui/svg-icons/social/school'

import CharacteristicsPage from './CharacteristicsPage'
import ConditionPage from './ConditionPage'
import Footer from '../components/Footer'
import PageWrapper from '../components/PageWrapper'
import ProfilePage from './ProfilePage'
import SkillsPage from './SkillsPage'
import TalentsPage from './TalentsPage'

const iconAccount = <IconAccount/>
const iconFire = <IconFire/>
const iconHealth = <IconHealth/>
const iconSchool = <IconSchool/>

export default class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'profile'
    }
  }

  handleConditionChange = (newJson) => this.props.onConditionChange(newJson)    
  handleAccountTabClick = () => this.setState({ page: 'profile' })
  handleHealthTabClick = () => this.setState({ page: 'health' })
  handleSkillsTabClick = () => this.setState({ page: 'skills' })
  handleTalentsTabClick = () => this.setState({ page: 'talents' })
  
  createFooterButtons = () => {
    return [{
      icon: iconAccount,
      onClick: this.handleAccountTabClick
    }, {
      icon: iconHealth,
      onClick: this.handleHealthTabClick
    }, {
      icon: iconSchool,
      onClick: this.handleSkillsTabClick
    }, {
      icon: iconFire,
      onClick: this.handleTalentsTabClick
    }]
  }

  render() {
    const { hero } = this.props

    if (!hero) {
      return (<div>Герой отсутствует</div>)
    }

    return (
      <div>
        <PageWrapper>
          {
            this.state.page === 'profile' &&
            <ProfilePage
              profile={hero.profile}
            />
          }
          {
            this.state.page === 'health' &&
            <ConditionPage
              condition={hero.condition}
              protections={hero.protections}              
              onChange={this.handleConditionChange}
            />
          }
          {
            this.state.page === 'skills' &&
            <div>
              <CharacteristicsPage
                characteristics={hero.characteristics}
              />
              <br/>
              <SkillsPage
                skills={hero.skills}
              />
              <br/>
            </div>
          }
          {
            this.state.page === 'talents' &&
            <TalentsPage/>
          }
        </PageWrapper>
        <Footer buttons={this.createFooterButtons()}/>
      </div>
    )
  }
}