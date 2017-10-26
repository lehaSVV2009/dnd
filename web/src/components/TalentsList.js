import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/List/ListSubheader'
import { Trans } from 'react-i18next'

import TalentCard from './TalentCard'

export default class TalentsList extends Component {
  render() {
    const { talents } = this.props;

    if (!Array.isArray(talents)) {
      return (<Trans>Таланты отсутствуют</Trans>)
    }

    return (
      <Paper className='left'>
        <Subheader><Trans>Таланты</Trans></Subheader>
        <br/>
        {
          talents.map((talent, index) => (
            <TalentCard
              key={index}
              index={index}
              talent={talent}
            />
          ))
        }
      </Paper>
    )
  }
}