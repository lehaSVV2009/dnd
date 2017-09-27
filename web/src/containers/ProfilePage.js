import React, { Component } from 'react'

export default class ProfilePage extends Component {
  render() {
    const { profile } = this.props;

    if (!profile) {
      return (<div>Профиль отсутствует</div>)
    }

    return (
      <div>
        Профиль:
        <div>ID: {profile.id}</div>
        <div>Имя: {profile.name}</div>
        <div>Описание: {profile.description}</div>
        <div>Уровень: {profile.level}</div>
        <div>Опыт: {profile.experience}</div>
        <div>Класс: {profile.category}</div>
        <div>Раса: {profile.level}</div>
        <div>Языка: {Array.isArray(profile.languages) ? profile.languages.join(', ') : ''}</div>
      </div>
    )
  }
}