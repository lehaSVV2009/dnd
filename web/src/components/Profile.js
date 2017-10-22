import React, {Component} from 'react'
import { Trans } from 'react-i18next'

import ProfileDescription from './ProfileDescription'
import ProfileInfo from './ProfileInfo'

export default class Profile extends Component {
  handleChange = (newJson) => this.props.onChange(newJson)  

  render() {
    const { profile } = this.props

    if (!profile) {
      return (<Trans>Профиль отсутствует</Trans>)
    }

    return (
      <div>
        <ProfileInfo
          title={profile.name}
          subtitle={profile.category + '-' + profile.race}
          experience={profile.experience}
          onChange={this.handleChange}
        />
        <ProfileDescription 
          additionalNotes={
            Array.isArray(profile.languages)
             ? <span><Trans parent='span'>Языки</Trans>: {profile.languages.join(', ')}</span> 
             : <span/>
          }
          description={profile.description}
          image={profile.image}
        />
      </div>
    )
  }
}