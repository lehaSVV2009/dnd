import React, { Component } from 'react'
import Card, { CardContent } from 'material-ui/Card'
import { Trans } from 'react-i18next'
import Typography from 'material-ui/Typography'

export default class TalentCard extends Component {

  render() {
    const { talent } = this.props

    if (!talent) {
      return (<Trans parent='span'>Таланты отсутствуют</Trans>)
    }

    return (
      <Card>
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
        </CardContent>
      </Card>
    )
  }
}