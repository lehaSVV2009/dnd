import React, { Component } from 'react'
import DeathIcon from 'material-ui/svg-icons/action/delete-forever'
import HeartIcon from 'material-ui/svg-icons/action/favorite'
import HealingIcon from 'material-ui/svg-icons/image/healing'
import Paper from 'material-ui/Paper'

import ConditionItem from './ConditionItem'

export default class Condition extends Component {

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
          value={condition.current_hit_points}
          icon={<HeartIcon />}
        />
        <ConditionItem
          max={condition.healings_per_day}
          value={condition.healings}
          icon={<HealingIcon />}
          name={'(+' + condition.healing_value + ' хитов)'}
        />
        <ConditionItem
          max={3}
          value={3 - condition.death_save_failures}
          icon={<DeathIcon />}
        />
      </Paper>
    )
  }
}