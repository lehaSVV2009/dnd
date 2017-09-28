import React, { Component } from 'react'

import SkillsList from '../components/SkillsList'

export default class SkillsPage extends Component {
 
  render() {
    const { skills } = this.props;

    if (!skills) {
      return (<div>Навыки отсутствует</div>)
    }

    return (
      <SkillsList skills={skills}/>
    )
  }
}