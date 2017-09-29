import React, { Component } from 'react'

import Condition from '../components/Condition'

export default class ConditionPage extends Component {

  handleHealthChange = (value) => this.props.onHealthChange(value)
  handleHealingsChange = (value) => this.props.onHealingsChange(value)
  handleDeathSavesChange = (value) => this.props.onDeathSavesChange(value)

  render() {
    const { condition } = this.props;

    if (!condition) {
      return (<div>Состояние отсутствует</div>)
    }

    return (
      <Condition 
        condition={condition}
        onHealthChange={this.handleHealthChange}
        onHealingsChange={this.handleHealingsChange}
        onDeathSavesChange={this.handleDeathSavesChange}
      />
    )
  }
}