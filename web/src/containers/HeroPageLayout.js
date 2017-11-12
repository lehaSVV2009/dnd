import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import { Trans } from 'react-i18next'

import ExtraNote from '../components/ExtraNote'
import DayPage from './DayPage'
import Condition from '../components/Condition'
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

  render() {
    const { classes, hero } = this.props

    if (!hero) {
      return (<Trans>Герой отсутствует</Trans>)
    }

    return (
      <Grid className={classes.root} container spacing={24}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <DayPage heroId={hero.id}/>
          <br/>
          <Condition
            condition={hero.condition}
            protections={hero.protections}
            onChange={this.handleHeroChange}
          />
          <br/>
          <ExtraNote
            extra={hero.extra}
            onChange={this.handleHeroChange}
          />
          <br/>
          <SkillsList
            characteristics={hero.characteristics}
            skills={hero.skills}
          />
          <br/>
          <TalentsList
            talents={hero.talents}
          />
          <br/>
          <Profile
            profile={hero.profile}
            onChange={this.handleHeroChange}
          />
        </Grid>
      </Grid>
    )
  }
}

HeroPageLayout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeroPageLayout)