import React, { Component } from 'react'

import Condition from '../components/Condition'

export default class ConditionPage extends Component {
  render() {
    const { condition } = this.props;

    if (!condition) {
      return (<div>Состояние отсутствует</div>)
    }

    return (
      <Condition condition={condition}/>
    )
  }
}