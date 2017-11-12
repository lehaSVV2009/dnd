import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'
import { Trans } from 'react-i18next'
import { Element } from 'react-scroll'

import BreadCrumb from '../components/BreadCrumb'
import Condition from '../components/Condition'
import DayPage from './DayPage'
import ExtraNote from '../components/ExtraNote'
import Header from '../components/Header'
import MobileBreadCrumb from '../components/MobileBreadCrumb'
import Profile from '../components/Profile'
import SkillsList from '../components/SkillsList'
import TalentsList from '../components/TalentsList'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  }
}

class HeroPageLayout extends Component {

  handleHeroChange = (updatedField) => this.props.onHandleHeroChange(updatedField)

  createBreadCrumbItems = () => {
    return [
      { to: 'scene', name: <Trans>Бой</Trans> },
      { to: 'condition', name: <Trans>Состояние</Trans> },
      { to: 'extra', name: <Trans>Особенности</Trans> },
      { to: 'skills', name: <Trans>Навыки</Trans> },
      { to: 'talents', name: <Trans>Таланты</Trans> },
      { to: 'profile', name: <Trans>Профиль</Trans> },
    ]
  }

  render() {
    const { classes, hero } = this.props

    if (!hero) {
      return (<Trans>Герой отсутствует</Trans>)
    }

    const breadCrumbItems = this.createBreadCrumbItems()
    return (
      <div>
        <Header>
          <Hidden mdDown>
            <BreadCrumb links={breadCrumbItems}/>
          </Hidden>
          <Hidden lgUp>
            <MobileBreadCrumb links={breadCrumbItems}/>
          </Hidden>
        </Header>
        <Grid className={classes.root} container spacing={24}>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Element name='scene'/>
            <DayPage heroId={hero.id}/>
            <br/>
            <Element name='condition'/>
            <Condition
              condition={hero.condition}
              protections={hero.protections}
              onChange={this.handleHeroChange}
            />
            <br/>
            <Element name='extra'/>
            <ExtraNote
              extra={hero.extra}
              onChange={this.handleHeroChange}
            />
            <br/>
            <Element name='skills'/>
            <SkillsList
              characteristics={hero.characteristics}
              skills={hero.skills}
            />
            <br/>
            <Element name='talents'/>
            <TalentsList
              talents={hero.talents}
            />
            <br/>
            <Element name='profile'/>
            <Profile
              profile={hero.profile}
              onChange={this.handleHeroChange}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

HeroPageLayout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeroPageLayout)