import React, { Component } from 'react';
import Slider from 'material-ui/Slider';

export default class ControlledSlider extends Component {
  state = {
    slider: this.props.value
  }

  handleSliderChange = (event, value) => {
    this.setState({ slider: value });
  }

  render() {
    return (
      <div>
        {this.state.slider || '' + 0}
        <Slider
          style={{ width: 100 }}
          min={this.props.min || 0}
          max={this.props.max || 100}
          step={this.props.step || 1}
          value={this.state.slider || 0}
          onChange={this.handleSliderChange}
        />
      </div>
    )
  }
}
