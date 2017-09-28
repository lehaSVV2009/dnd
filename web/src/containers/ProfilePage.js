import React, { Component } from 'react'

import ProfileCard from '../components/ProfileCard'

export default class ProfilePage extends Component {
  render() {
    const { profile } = this.props;

    if (!profile) {
      return (<div>Профиль отсутствует</div>)
    }

    return (
      <ProfileCard
        title={profile.name}
        subtitle={profile.category + '-' + profile.race}
        avatar={profile.avatar}
        image={profile.image}
        descriptionTitle={'Уровень ' + profile.level}
        descriptionSubtitle={'Опыт ' + profile.experience}
        description={profile.description}
        additionalNotes={Array.isArray(profile.languages) ? 'Языки: ' + profile.languages.join(', ') : ''}
      />
    )
  }
}