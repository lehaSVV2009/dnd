import React, { Component } from 'react'

import CharacteristicsList from '../components/CharacteristicsList'

export default class CharacteristicsPage extends Component {
  render() {
    const { characteristics } = this.props;

    if (!characteristics) {
      return (<div>Характеристики отсутствуют</div>)
    }

    return (
      <CharacteristicsList characteristics={characteristics}/>
    )
  }
}