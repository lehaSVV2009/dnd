import React, { Component } from 'react';

import ControlledSlider from './ControlledSlider'

export default class ConditionItem extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}: </div>
        <ControlledSlider
          min={this.props.min || 0}
          max={this.props.max || 100}
          step={this.props.step || 1}
          value={this.props.value || 0}
        />
      </div>
    )
  }
}
