import React, { Component } from 'react'
import Slider from 'material-ui-slider-label/Slider'
import { cyan500 } from 'material-ui/styles/colors'

const styles = {
  labelStyleOuter: {
    width: '20px',
    height: '20px',
    borderRadius: '50% 50% 50% 0',
    background: cyan500,
    position: 'absolute',
    transform: 'rotate(-45deg)',
    top: '-25px',
    left: '-4px',
  },
  labelStyleInner: {
    transform: 'rotate(45deg)',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    top: '3px',
    right: '0px',
    fontSize: '10px',
  }
}

export default class LabeledSlider extends Component {
  state = {
    slider: this.props.value
  }

  handleSliderChange = (event, value) => {
    this.setState({ slider: value })
  }

  render() {
    return (
      <Slider
        style={styles}
        min={this.props.min || 0}
        max={this.props.max || 100}
        step={this.props.step || 1}
        value={this.state.slider || 0}
        onChange={this.handleSliderChange}
        label={
          <div style={styles.labelStyleOuter}>
            <div style={styles.labelStyleInner}>
              {this.state.slider}
            </div>
          </div>
        }
      />
    )
  }
}