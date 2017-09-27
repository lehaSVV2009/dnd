import React, { Component } from 'react'

export default class ConditionPage extends Component {
  render() {
    const { condition } = this.props;

    if (!condition) {
      return (<div>Состояние отсутствует</div>)
    }

    return (
      <div>
        Состояние:
        <div>Максимальное количество хитов: {condition.max_hit_points}</div>
        <div>Текущее количество хитов: {condition.current_hit_points}</div>
        <div>Исцеления: {condition.healings}</div>
        <div>Исцеления в день: {condition.healings_per_day}</div>
        <div>Неудачные спасброски от смерти: {condition.death_save_failures}</div>
      </div>
    )
  }
}