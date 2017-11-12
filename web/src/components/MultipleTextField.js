import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'center',
  },
})

class MultipleTextField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  handleChange = (event) => {
    const newValue = event.target.value
    this.setState({ value: newValue })
    if (this.props.onChange) {
      this.props.onChange(newValue)
    }
  }

  render() {
    const { classes, label, value } = this.props

    return (
      <TextField
        label={label}
        placeholder={label}
        multiline
        className={classes.textField}
        margin='normal'
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }
}

MultipleTextField.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MultipleTextField)