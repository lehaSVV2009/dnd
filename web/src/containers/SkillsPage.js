import React, { Component } from 'react'

import SkillsList from '../components/SkillsList'

export default class SkillsPage extends Component {
 
  render() {
    const { characteristics, skills } = this.props;

    return (
      <SkillsList
        characteristics={characteristics}
        skills={skills}
      />
    )
  }
}