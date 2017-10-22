import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { Trans } from 'react-i18next'

import Collection from './Collection'

export default class SkillsList extends Component {

  render() {
    const { characteristics, skills } = this.props;

    if (Array.isArray(characteristics)) {
      return (<Trans>Характеристики отсутствуют</Trans>)
    }

    if (Array.isArray(skills)) {
      return (<Trans>Навыки отсутствуют</Trans>)
    }

    return (
      <Paper>
        <Collection 
          name={<Trans>Навыки и Характеристики</Trans>}
          items={[
            { name: <Trans>Инициатива</Trans>, value: characteristics.initiative },
            { name: <Trans>Скорость</Trans>, value: characteristics.speed },
            { name: <Trans>Проницательность</Trans>, value: characteristics.vision },
            { name: <Trans>Внимательность</Trans>, value: characteristics.attentiveness },
            { name: <Trans>Сила</Trans>, value: characteristics.strength },
            { name: <Trans>Телосложение</Trans>, value: characteristics.constitution },
            { name: <Trans>Ловкость</Trans>, value: characteristics.dexterity },
            { name: <Trans>Интеллект</Trans>, value: characteristics.intelligence },
            { name: <Trans>Мудрость</Trans>, value: characteristics.wisdom },
            { name: <Trans>Харизма</Trans>, value: characteristics.charisma },
            { name: <Trans>Акробатика</Trans>, value: skills.acrobatics }, 
            { name: <Trans>Атлетика</Trans>, value: skills.athletics }, 
            { name: <Trans>Внимательность</Trans>, value: skills.perception }, 
            { name: <Trans>Воровство</Trans>, value: skills.stealing }, 
            { name: <Trans>Выносливость</Trans>, value: skills.endurance }, 
            { name: <Trans>Запугивание</Trans>, value: skills.intimidation }, 
            { name: <Trans>Знание улиц</Trans>, value: skills.investigation }, 
            { name: <Trans>История</Trans>, value: skills.history }, 
            { name: <Trans>Магия</Trans>, value: skills.magic }, 
            { name: <Trans>Обман</Trans>, value: skills.deception }, 
            { name: <Trans>Подземелья</Trans>, value: skills.dungeons }, 
            { name: <Trans>Природа</Trans>, value: skills.nature }, 
            { name: <Trans>Религия</Trans>, value: skills.religion }, 
            { name: <Trans>Скрытность</Trans>, value: skills.stealth }, 
            { name: <Trans>Проницательность</Trans>, value: skills.insights }, 
            { name: <Trans>Целительство</Trans>, value: skills.medicine }
          ]}
        />
      </Paper>
    )
  }
}