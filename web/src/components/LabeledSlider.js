import React, { Component } from 'react'
import Chip from 'material-ui/Chip'
import { Col, Row } from 'react-flexbox-grid'
import IconButton from 'material-ui/IconButton'
import IconMinus from 'material-ui-icons/RemoveCircleOutline'
import IconPlus from 'material-ui-icons/AddCircleOutline'

export default class LabeledSlider extends Component {
  state = {
    slider: this.props.value
  }

  handleMinusButtonClick = (event) => {
    if (this.state.slider > (this.props.min || 0)) {
      this.handleSliderChange(event, this.state.slider - 1)
    }
  }

  handlePlusButtonClick = (event) => {
    if (this.state.slider < (this.props.max || 100)) {
      this.handleSliderChange(event, this.state.slider + 1)
    }
  }

  handleSliderChange = (event, value) => {
    this.setState({ slider: value })
    this.props.onChange(value);
  }

  render() {
    return (
      <Row around='xs'>
        <Col xs={2}>
          <IconButton onClick={this.handleMinusButtonClick}>
            <IconMinus />
          </IconButton>
        </Col>
        <Col xs={1}>
          <Chip label={this.state.slider}/>
        </Col>
        <Col xs={2}>
          <IconButton onClick={this.handlePlusButtonClick}>
            <IconPlus />
          </IconButton>
        </Col>
      </Row>
    )
  }
}