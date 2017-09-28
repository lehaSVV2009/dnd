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
        avatar='https://i.pinimg.com/736x/52/43/76/524376d102c1837d936a618024597de1--character-creation-character-concept.jpg'
        image='https://vignette3.wikia.nocookie.net/kerectusportal/images/7/74/EladrinMaleGelmir1.jpg/revision/latest?cb=20131024071151'
        descriptionTitle={'Уровень ' + profile.level}
        descriptionSubtitle={'Опыт ' + profile.experience}
        description={profile.description}
        additionalNotes={Array.isArray(profile.languages) ? 'Языки: ' + profile.languages.join(', ') : ''}
      />
    )
  }
}