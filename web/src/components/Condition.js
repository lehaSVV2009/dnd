import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

import ConditionItem from './ConditionItem'
import BadgedIcons from './BadgedIcons'

export default class Condition extends Component {

  render() {
    const { condition } = this.props;

    if (!condition) {
      return (<div>Состояние отсутствует</div>)
    }

    return (
      <Paper className='left'>
        <BadgedIcons
          items={[
            { icon: 'Максимальное количество хитов', value: condition.max_hit_points },
            { icon: 'Текущее количество хитов', value: condition.current_hit_points },
            { icon: 'Исцеления', value: condition.healings },
            { icon: 'Величина исцеления', value: condition.healing_value },
            { icon: 'Исцеления в день', value: condition.healings_per_day },
            { icon: 'Неудачные спасброски от смерти', value: condition.death_save_failures }
          ]}
        />
      </Paper>
    )
  }
}