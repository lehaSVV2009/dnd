import React from 'react'
import Button from 'material-ui/Button'
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog'
import { Trans } from 'react-i18next'

export default class FormDialog extends React.Component {

  handleSave = () => {
    this.props.onSave()
  }

  handleClose = () => {
    this.props.onClose()
  }

  render() {
    return (
      <Dialog 
        open={this.props.open} 
        onRequestClose={this.handleClose}
        onKeyDown={(event) => event.key === 'Enter' && this.handleSave()}
      >
        <DialogTitle>{this.props.title}</DialogTitle>
        <DialogContent>
          {this.props.children}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color='primary'>
            <Trans>Отмена</Trans>
          </Button>
          <Button onClick={this.handleSave} color='primary'>
            <Trans>Применить</Trans>
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}