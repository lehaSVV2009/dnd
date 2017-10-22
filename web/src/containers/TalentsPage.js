import React, { Component } from 'react'

import TalentsList from '../components/TalentsList'

export default class TalentsPage extends Component {

  handleUseTalent = (newJson) => this.props.onUseTalent(newJson)

  render() {
    const { talents } = this.props;

    return (
      <TalentsList
        talents={talents}
        onUseTalent={this.handleUseTalent}
      />
    )
  }
}