import React, { Component } from 'react'

import TalentsList from '../components/TalentsList'

export default class TalentsPage extends Component {

  render() {
    const { talents } = this.props;

    return (
      <TalentsList
        talents={talents}
      />
    )
  }
}