import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { translate, Trans } from 'react-i18next'

import Collection from './Collection'

class SkillsList extends Component {

  render() {
    const { characteristics, skills, t } = this.props;

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
            { name: t('Акробатика'), value: skills.acrobatics }, 
            { name: t('Атлетика'), value: skills.athletics }, 
            { name: t('Внимательность'), value: skills.perception }, 
            { name: t('Воровство'), value: skills.stealing }, 
            { name: t('Внимательность'), value: characteristics.attentiveness },
            { name: t('Выносливость'), value: skills.endurance }, 
            { name: t('Запугивание'), value: skills.intimidation }, 
            { name: t('Знание улиц'), value: skills.investigation }, 
            { name: t('Ловкость'), value: characteristics.dexterity },
            { name: t('Мудрость'), value: characteristics.wisdom },
            { name: t('История'), value: skills.history }, 
            { name: t('Инициатива'), value: characteristics.initiative },
            { name: t('Интеллект'), value: characteristics.intelligence },
            { name: t('Магия'), value: skills.magic }, 
            { name: t('Обман'), value: skills.deception }, 
            { name: t('Подземелья'), value: skills.dungeons }, 
            { name: t('Природа'), value: skills.nature }, 
            { name: t('Проницательность'), value: characteristics.vision },
            { name: t('Религия'), value: skills.religion }, 
            { name: t('Скорость'), value: characteristics.speed },
            { name: t('Скрытность'), value: skills.stealth }, 
            { name: t('Сила'), value: characteristics.strength },
            { name: t('Телосложение'), value: characteristics.constitution },
            { name: t('Проницательность'), value: skills.insights }, 
            { name: t('Харизма'), value: characteristics.charisma },
            { name: t('Целительство'), value: skills.medicine }
          ]}
        />
      </Paper>
    )
  }
}

export default translate()(SkillsList)