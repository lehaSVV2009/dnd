import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chip from 'material-ui/Chip'
import IconButton from 'material-ui/IconButton'
import IconMinus from 'material-ui-icons/RemoveCircleOutline'
import IconPlus from 'material-ui-icons/AddCircleOutline'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  slider: {
    display: 'flex'
  }
})

class LabeledSlider extends Component {
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
      <span className={this.props.classes.slider}>
        <IconButton onClick={this.handleMinusButtonClick}>
          <IconMinus />
        </IconButton>
        <Chip label={this.state.slider}/>
        <IconButton onClick={this.handlePlusButtonClick}>
          <IconPlus />
        </IconButton>
      </span>
    )
  }
}

LabeledSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(LabeledSlider)