import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/List/ListSubheader'
import { Trans } from 'react-i18next'

import TalentCard from './TalentCard'

const styles = {}

class TalentsList extends Component {

  render() {
    const { onUse, talents } = this.props;

    if (!Array.isArray(talents)) {
      return (<Trans>Таланты отсутствуют</Trans>)
    }

    return (
      <Paper className='left'>
        <Subheader><Trans>Таланты</Trans></Subheader>
        {
          talents.map((talent, index) => (
            <TalentCard
              key={index}
              index={index}
              talent={talent}
              onUse={onUse}
            />
          ))
        }
      </Paper>
    )
  }
}

TalentsList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TalentsList)