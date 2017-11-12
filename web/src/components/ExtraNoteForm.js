import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { translate } from 'react-i18next'

import MultipleTextField from './MultipleTextField'

const styles = {}

class ExtraNoteForm extends Component {
  handleTextChange = (value) => this.props.onTextChange(value)

  render() {
    const { extra, t } = this.props

    return (
      <div>
        <MultipleTextField
          label={t('Введите текст')}
          value={extra}
          onChange={this.handleTextChange}
        />
        <br/>
      </div>
    )
  }
}

ExtraNoteForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(translate()(ExtraNoteForm))