import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/List/ListSubheader'
import { Trans } from 'react-i18next'

import TalentCard from './TalentCard'

export default class TalentsList extends Component {
  handleUseTalent = (index) => {
    // TODO make immutable
    const talents = this.props.talents.map(talent => JSON.parse(JSON.stringify(talent)));
    talents[index].used++
    this.props.onUseTalent({
      talents
    })
  }

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
              onUseTalent={this.handleUseTalent}
            />
          ))
        }
      </Paper>
    )
  }
}