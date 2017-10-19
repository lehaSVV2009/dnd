import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

import Collection from './Collection'

export default class SkillsList extends Component {

  render() {
    const { characteristics, skills } = this.props;

    if (Array.isArray(characteristics)) {
      return (<div>Характеристики отсутствуют</div>)
    }

    if (Array.isArray(skills)) {
      return (<div>Навыки отсутствуют</div>)
    }

    return (
      <Paper>
        <Collection 
          name='Навыки и Характеристики'
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
            { name: 'Харизма', value: characteristics.charisma },
            { name: 'Акробатика', value: skills.acrobatics }, 
            { name: 'Атлетика', value: skills.athletics }, 
            { name: 'Внимательность', value: skills.perception }, 
            { name: 'Воровство', value: skills.stealing }, 
            { name: 'Выносливость', value: skills.endurance }, 
            { name: 'Запугивание', value: skills.intimidation }, 
            { name: 'Знание улиц', value: skills.investigation }, 
            { name: 'История', value: skills.history }, 
            { name: 'Магия', value: skills.magic }, 
            { name: 'Обман', value: skills.deception }, 
            { name: 'Подземелья', value: skills.dungeons }, 
            { name: 'Природа', value: skills.nature }, 
            { name: 'Религия', value: skills.religion }, 
            { name: 'Скрытность', value: skills.stealth }, 
            { name: 'Проницательность', value: skills.insights }, 
            { name: 'Целительство', value: skills.medicine }
          ]}
        />
      </Paper>
    )
  }
}