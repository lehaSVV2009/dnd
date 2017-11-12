import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import { Trans } from 'react-i18next'
import Typography from 'material-ui/Typography'

const styles = {
  useButton: {
    background: 'linear-gradient(45deg, #81C784 30%, #AEEA00 90%)',
  },
}

class TalentCard extends Component {

  handleUseClick = () => this.props.onUse(this.props.talent)

  getTalentColor = (talentLimitType) => {
    return talentLimitType === 'На день'
      ? '#FFCC80' : talentLimitType === 'На сцену'
      ? '#FFF3E0' : 'white'
  }

  render() {
    const { classes, onUse, talent } = this.props

    if (!talent) {
      return (<Trans parent='span'>Талант отсутствует</Trans>)
    }

    return (
      <Card style={{ backgroundColor: this.getTalentColor(talent.limit_type) }}>
        <CardContent>
          <Typography type='body1'>
            {talent.limit_type}
          </Typography>
          <Typography type='headline' component='h2'>
            {talent.title}
          </Typography>
          <Typography type='body1'>
            <i>{talent.action_type}</i>
          </Typography>
          <Typography component='p'>
            {talent.description}
            <br/>
            <Trans parent='span'>Требования</Trans>: <b>{Array.isArray(talent.requirements) ? talent.requirements.join(', ') : ''}</b>
            <br/>
            <Trans parent='span'>Дистанция</Trans>: <b>{talent.distance}</b>
            <br/>
            <Trans parent='span'>Цель</Trans>: <b>{talent.goal}</b>
            <br/>
            <Trans parent='span'>Атака</Trans>: <b>{talent.attack}</b>
            <br/>
            <Trans parent='span'>Урон</Trans>: <b>{talent.hit}</b>
            <br/>
            <Trans parent='span'>Эффект</Trans>: <b>{talent.effect}</b>
            <br/>
            <Trans parent='span'>Промах</Trans>: <b>{talent.miss}</b>
            <br/>
            <Trans parent='span'>Особенности</Trans>: <b>{talent.speciality}</b>
          </Typography>
          {
            onUse && 
            <CardActions>
              <Button raised className={classes.useButton} onClick={this.handleUseClick}>
                <Trans parent='span'>Пробую</Trans>
              </Button>
            </CardActions>
          }
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(TalentCard)