import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

import Collection from './Collection'

export default class CharacteristicList extends Component {

  render() {
    const { characteristics } = this.props;

    if (Array.isArray(characteristics)) {
      return (<div>Характеристики отсутствуют</div>)
    }

    return (
      <Paper>
        <Collection 
          name='Характеристики'
          items={[
            { name: 'Инициатива', value: characteristics.initiative },
            { name: 'Скорость', value: characteristics.speed },
            { name: 'Проницательность', value: characteristics.vision },
            { name: 'Внимательность', value: characteristics.attentiveness },
            { name: 'Сила', value: characteristics.strength },
            { name: 'Телосложение', value: characteristics.constitution },
            { name: 'Ловкость', value: characteristics.dexterity },
            { name: 'Интеллект', value: characteristics.intelligence },
            { name: 'Мудрость', value: characteristics.wisdom },
            { name: 'Харизма', value: characteristics.charisma }
          ]}
        />
      </Paper>
    )
  }
}