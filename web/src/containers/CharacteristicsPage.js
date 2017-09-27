import React, { Component } from 'react'

export default class CharacteristicsPage extends Component {
  render() {
    const { characteristics } = this.props;

    if (!characteristics) {
      return (<div>Характеристики отсутствуют</div>)
    }

    return (
      <div>
        Характеристики
        <div>Инициатива: {characteristics.initiative}</div>
        <div>Скорость: {characteristics.speed}</div>
        <div>Проницательность: {characteristics.vision}</div>
        <div>Внимательность: {characteristics.attentiveness}</div>
        <div>Сила: {characteristics.strength}</div>
        <div>Телосложение: {characteristics.constitution}</div>
        <div>Ловкость: {characteristics.dexterity}</div>
        <div>Интеллект: {characteristics.intelligence}</div>
        <div>Мудрость: {characteristics.wisdom}</div>
        <div>Харизма: {characteristics.charisma}</div>
      </div>
    )
  }
}