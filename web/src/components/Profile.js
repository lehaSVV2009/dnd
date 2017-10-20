import React, {Component} from 'react'

import ProfileDescription from './ProfileDescription'
import ProfileInfo from './ProfileInfo'

export default class Profile extends Component {
  handleChange = (newJson) => this.props.onChange(newJson)  

  render() {
    const { profile } = this.props
    return (
      <div>
        <ProfileInfo
          title={profile.name}
          subtitle={profile.category + '-' + profile.race}
          experience={profile.experience}
          onChange={this.handleChange}
        />
        <ProfileDescription 
          additionalNotes={Array.isArray(profile.languages) ? 'Языки: ' + profile.languages.join(', ') : ''}
          description={profile.description}
          image={profile.image}
        />
      </div>
    )
  }
}