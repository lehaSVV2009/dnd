import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/List/ListSubheader'
import { Trans } from 'react-i18next'

import ExtraNoteForm from './ExtraNoteForm'

const styles = {}

class ExtraNote extends Component {

  handleTextChange = (value) => this.props.onChange({ extra: value })

  render() {
    const { extra } = this.props

    return (
      <Paper>
        <Subheader><Trans>Дополнительно</Trans></Subheader>
        <ExtraNoteForm 
          extra={extra}
          onTextChange={this.handleTextChange}
        />
      </Paper>
    )
  }
}

ExtraNote.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ExtraNote)