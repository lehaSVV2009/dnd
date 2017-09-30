import React, { Component } from 'react'

import TalentsList from '../components/TalentsList'

export default class TalentsPage extends Component {

  handleUseTalent = (newJson) => this.props.onUseTalent(newJson)

  render() {
    const { talents } = this.props;

    if (!Array.isArray(talents)) {
      return (<div>Таланты отсутствуют</div>)
    }

    return (
      <TalentsList
        talents={talents}
        onUseTalent={this.handleUseTalent}
      />
    )
  }
}