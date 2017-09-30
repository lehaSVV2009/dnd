import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

export default class TalentCard extends Component {

  handleUseTalentClick = () => this.props.onUseTalent(this.props.index)

  render() {
    const { talent } = this.props

    if (!talent) {
      return (<div>Таланты отсутствуют</div>)
    }

    return (
      <Card>
        <CardHeader
          title={talent.title}
          subtitle={`${talent.limit_type}, ${talent.used} использовано`}
          actAsExpander={true}
          showExpandableButton={true}
          {... this.props.avatar && { avatar : this.props.avatar }}
        />
        <CardTitle
          expandable={true}
          title={talent.description}
          subtitle={talent.action_type}
        />
        <CardText expandable={true}>
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
        </CardText>
        <CardActions expandable={true}>
          <FlatButton
            label='Пробую!'
            onClick={this.handleUseTalentClick}
          />
        </CardActions>
      </Card>
    )
  }
}