import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

import FormDialog from './FormDialog'

export default class CounterFormDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleCountSave = () => {
    this.props.onSave(Number.parseFloat(this.state.count))
  }

  handleCountChange = (event) => {
    this.setState({
      count: event.target.value 
    })
  }

  handleFormDialogClose = () => {
    this.props.onClose()
  }

  render() {
    return (
      <FormDialog 
        title={this.props.title}
        open={this.props.open}
        onClose={this.handleFormDialogClose}
        onSave={this.handleCountSave}
      >
        <TextField
          label={this.props.label}
          value={this.state.count}
          onChange={this.handleCountChange}
          type='number'
        />
      </FormDialog>
    )
  }
}