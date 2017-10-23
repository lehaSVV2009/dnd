import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import { Trans } from 'react-i18next'

import FormDialog from './FormDialog'

export default class MoneyFormDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addedMoney: 0
    }
  }

  handleMoneySave = () => {
    this.props.onSave(Number.parseFloat(this.state.addedMoney))
  }

  handleMoneyChange = (event) => {
    this.setState({
      addedMoney: event.target.value 
    })
  }

  handleFormDialogClose = () => {
    this.props.onClose()
  }

  render() {
    return (
      <FormDialog 
        title={<Trans>Деньги</Trans>}
        open={this.props.open}
        onClose={this.handleFormDialogClose}
        onSave={this.handleMoneySave}
      >
        <TextField
          label={<Trans>Добавить деньги</Trans>}
          value={this.state.addedMoney}
          onChange={this.handleMoneyChange}
          type='number'
        />
      </FormDialog>
    )
  }
}