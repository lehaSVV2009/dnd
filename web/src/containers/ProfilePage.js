import React, { Component } from 'react'

import Condition from '../components/Condition'
import Profile from '../components/Profile'

export default class ProfilePage extends Component {
  handleChange = (newJson) => this.props.onChange(newJson)

  render() {
    const { condition, profile, protections } = this.props;

    if (!profile) {
      return (<div>Профиль отсутствует</div>)
    }

    return (
      <div>
        <Profile
          profile={profile}
        />
        <Condition 
          condition={condition}
          protections={protections}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}