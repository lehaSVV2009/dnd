import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chip from 'material-ui/Chip'
import IconButton from 'material-ui/IconButton'
import IconMinus from 'material-ui-icons/RemoveCircleOutline'
import IconPlus from 'material-ui-icons/AddCircleOutline'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  counter: {
    display: 'flex'
  }
})

class EditableCounter extends Component {
  state = {
    counter: this.props.value
  }

  handleMinusButtonClick = (event) => {
    if (this.state.counter > (this.props.min || 0)) {
      this.handleCounterChange(event, this.state.counter - 1)
    }
  }

  handlePlusButtonClick = (event) => {
    if (this.state.counter < (this.props.max || 100)) {
      this.handleCounterChange(event, this.state.counter + 1)
    }
  }

  handleCounterChange = (event, value) => {
    this.setState({ counter: value })
    this.props.onChange(value);
  }

  render() {
    return (
      <span className={this.props.classes.counter}>
        <IconButton onClick={this.handleMinusButtonClick}>
          <IconMinus />
        </IconButton>
        <Chip label={this.state.counter}/>
        <IconButton onClick={this.handlePlusButtonClick}>
          <IconPlus />
        </IconButton>
      </span>
    )
  }
}

EditableCounter.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(EditableCounter)