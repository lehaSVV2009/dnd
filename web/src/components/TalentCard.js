import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

export default class TalentCard extends Component {

  handleUseTalentClick = () => this.props.onUseTalent(this.props.index)

  render() {
    const { talent } = this.props

    if (!talent) {
      return (<div>Таланты отсутствуют</div>)
    }

    return (
      <Card>
        <CardContent>
          <Typography type='body1'>
            {talent.limit_type}, {talent.used} использовано
          </Typography>
          <Typography type='headline' component='h2'>
            {talent.title}
          </Typography>
          <Typography type='body1'>
            {talent.action_type}
          </Typography>
          <Typography component='p'>
            {talent.description}
            <br/>
            Дистанция: {talent.distance}
            <br/>
            Цель: {talent.goal}
            <br/>
            Атака: {talent.attack}
            <br/>
            Урон: {talent.hit}
            <br/>
            Эффект: {talent.effect}
            <br/>
            Промах: {talent.miss}
            <br/>
            Особенности: {talent.speciality}
            <br/>
            Использован: {talent.used} раз.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={this.handleUseTalentClick}
          >Пробую!</Button>
        </CardActions>
      </Card>
    )
  }
}