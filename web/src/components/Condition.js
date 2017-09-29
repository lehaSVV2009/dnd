import React, { Component } from 'react'
import DeathIcon from 'material-ui/svg-icons/action/delete-forever'
import HeartIcon from 'material-ui/svg-icons/action/favorite'
import HealingIcon from 'material-ui/svg-icons/image/healing'
import Paper from 'material-ui/Paper'

import ConditionItem from './ConditionItem'

export default class Condition extends Component {

  handleHealthChange = (value) => this.props.onHealthChange(value)
  handleHealingsChange = (value) => this.props.onHealingsChange(value)
  handleDeathSavesChange = (value) => this.props.onDeathSavesChange(3 - value)

  render() {
    const { condition } = this.props;

    if (!condition) {
      return (<div>Состояние отсутствует</div>)
    }

    return (
      <Paper className='left'>
        <br/>
        <ConditionItem
          max={condition.max_hit_points}
          min={-1}
          value={condition.current_hit_points}
          icon={<HeartIcon />}
          onChange={this.handleHealthChange}
        />
        <ConditionItem
          max={condition.healings_per_day}
          value={condition.healings}
          icon={<HealingIcon />}
          name={'(+' + condition.healing_value + ' хитов)'}
          onChange={this.handleHealingsChange}
        />
        <ConditionItem
          max={3}
          value={3 - condition.death_save_failures}
          icon={<DeathIcon />}
          onChange={this.handleDeathSavesChange}
        />
      </Paper>
    )
  }
}