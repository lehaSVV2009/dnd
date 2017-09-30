import React, { Component } from 'react'

import Condition from '../components/Condition'

export default class ConditionPage extends Component {

  handleChange = (newJson) => this.props.onChange(newJson)

  render() {
    const { condition, protections } = this.props;

    if (!condition || !protections) {
      return (<div>Состояние отсутствует</div>)
    }

    return (
      <Condition 
        condition={condition}
        protections={protections}
        onChange={this.handleChange}
      />
    )
  }
}