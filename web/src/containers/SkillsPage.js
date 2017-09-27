import React, { Component } from 'react'

export default class SkillsPage extends Component {
 
  render() {
    const { skills } = this.props;

    if (!skills) {
      return (<div>Навыки отсутствует</div>)
    }

    return (
      <div>
        Навыки:
        <div>Акробатика: {skills.acrobatics}</div>
        <div>Атлетика: {skills.athletics}</div>
        <div>Внимательность: {skills.perception}</div>
        <div>Воровство: {skills.stealing}</div>
        <div>Выносливость: {skills.endurance}</div>
        <div>Запугивание: {skills.intimidation}</div>
        <div>Знание улиц: {skills.investigation}</div>
        <div>История: {skills.history}</div>
        <div>Магия: {skills.magic}</div>
        <div>Обман: {skills.deception}</div>
        <div>Подземелья: {skills.dungeons}</div>
        <div>Природа: {skills.nature}</div>
        <div>Религия: {skills.religion}</div>
        <div>Скрытность: {skills.stealth}</div>
        <div>Проницательность: {skills.insights}</div>
        <div>Целительство: {skills.medicine}</div>
      </div>
    )
  }
}