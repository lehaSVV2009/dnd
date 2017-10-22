import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import { Trans } from 'react-i18next'
import Typography from 'material-ui/Typography'

export default class TalentCard extends Component {

  handleUseTalentClick = () => this.props.onUseTalent(this.props.index)

  render() {
    const { talent } = this.props

    if (!talent) {
      return (<Trans parent='span'>Таланты отсутствуют</Trans>)
    }

    return (
      <Card>
        <CardContent>
          <Typography type='body1'>
            {talent.limit_type}, {talent.used} <Trans parent='span'>использовано</Trans>
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
            <br/>
            <Trans parent='span'>Использовано</Trans>: <b>{talent.used}</b>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={this.handleUseTalentClick}
          >
            <Trans parent='span'>Пробую</Trans>
          </Button>
        </CardActions>
      </Card>
    )
  }
}