import React, { Component } from 'react'
import DeathIcon from 'material-ui/svg-icons/action/delete-forever'
import DefenceIcon from 'material-ui/svg-icons/hardware/security'
import HeartIcon from 'material-ui/svg-icons/action/favorite'
import HealingIcon from 'material-ui/svg-icons/image/healing'
import MoneyIcon from 'material-ui/svg-icons/editor/attach-money'
import PoolIcon from 'material-ui/svg-icons/places/pool'
import Paper from 'material-ui/Paper'
import ReactionIcon from 'material-ui/svg-icons/notification/airline-seat-legroom-extra'
import TVIcon from 'material-ui/svg-icons/hardware/tv'
import Subheader from 'material-ui/Subheader'

import ConditionItem from './ConditionItem'

export default class Condition extends Component {

  handleChange = (newJson) => this.props.onChange(newJson)

  render() {
    const { condition, protections } = this.props;

    if (!condition || !protections) {
      return (<div>Состояние отсутствует</div>)
    }

    return (
      <Paper>
        <Subheader>Состояние</Subheader>
        <br/>
        <ConditionItem
          name='ХП'
          max={condition.max_hit_points}
          min={-1}
          value={condition.current_hit_points}
          icon={<HeartIcon />}
          onChange={(value) => this.handleChange({ condition: { current_hit_points: value }})}
        />
        <ConditionItem
          name='Хил'
          description={`(+${condition.healing_value} хитов)`}
          max={condition.healings_per_day}
          value={condition.healings}
          icon={<HealingIcon />}
          onChange={(value) => this.handleChange({ condition: { healings: value }})}
          />
        <ConditionItem
          name='Спас броски'
          max={3}
          value={3 - condition.death_save_failures}
          icon={<DeathIcon />}
          onChange={(value) => this.handleChange({ condition: { death_save_failures: 3 - value }})}
        />
        <ConditionItem
          name='Деньги'
          max={10000}
          value={condition.money}
          icon={<MoneyIcon />}
          onChange={(value) => this.handleChange({ condition: { money: value }})}
        />
        <ConditionItem
          name='КД'
          max={40}
          value={protections.armor_class}
          icon={<DefenceIcon />}
          onChange={(value) => this.handleChange({ protections: { armor_class: value }})}
        />
        <ConditionItem
          name='Стойкость'
          max={40}
          value={protections.durability}
          icon={<PoolIcon />}
          onChange={(value) => this.handleChange({ protections: { durability: value }})}
        />
        <ConditionItem
          name='Реакция'
          max={40}
          value={protections.reaction}
          icon={<ReactionIcon />}
          onChange={(value) => this.handleChange({ protections: { reaction: value }})}
        />
        <ConditionItem
          name='Воля'
          max={40}
          value={protections.will}
          icon={<TVIcon />}
          onChange={(value) => this.handleChange({ protections: { will: value }})}
        />
      </Paper>
    )
  }
}