import React, {Component} from 'react'

import ProfileDescription from './ProfileDescription'
import ProfileInfo from './ProfileInfo'

export default class Profile extends Component {
  render() {
    const { profile } = this.props
    return (
      <div>
        <ProfileInfo
          image={profile.image}
          title={profile.name}
          subtitle={profile.category + '-' + profile.race}
          experience={profile.experience}
        />
        <ProfileDescription 
          additionalNotes={Array.isArray(profile.languages) ? 'Языки: ' + profile.languages.join(', ') : ''}
          description={profile.description}
        />
      </div>
    )
  }
}