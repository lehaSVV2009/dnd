import React, { Component } from 'react'
import DeathIcon from 'material-ui-icons/DeleteForever'
import DefenceIcon from 'material-ui-icons/Security'
import HeartIcon from 'material-ui-icons/Favorite'
import HealingIcon from 'material-ui-icons/Healing'
import MoneyIcon from 'material-ui-icons/AttachMoney'
import PoolIcon from 'material-ui-icons/Pool'
import Paper from 'material-ui/Paper'
import ReactionIcon from 'material-ui-icons/AirlineSeatLegroomExtra'
import TVIcon from 'material-ui-icons/Tv'
import Subheader from 'material-ui/List/ListSubheader'
import { Trans } from 'react-i18next'

import ConditionItem from './ConditionItem'
import MoneyConditionItem from './MoneyConditionItem'
import MoneyFormDialog from './MoneyFormDialog'

export default class Condition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      money: props.condition.money,
      openMoneyDialog: false
    }
  }

  handleChange = (newJson) => this.props.onChange(newJson)

  handleOpenMoneyDialog = () => {
    this.setState({
      openMoneyDialog: true
    })
  }

  handleSaveMoney = (value) => {
    if (value) {
      const newMoney = this.state.money + value
      this.handleChange({ condition: { money: newMoney }})
      this.setState({ 
        openMoneyDialog: false,
        money: newMoney,
      })
    }
  }

  handleCloseMoneyDialog = () => {
    this.setState({
      openMoneyDialog: false
    })
  }

  render() {
    const { condition, protections } = this.props

    if (!condition || !protections) {
      return (<Trans>Состояние отсутствует</Trans>)
    }

    return (
      <Paper>
        <Subheader><Trans>Состояние</Trans></Subheader>
        <br/>
        <MoneyConditionItem
          name={<Trans>Деньги</Trans>}
          icon={<MoneyIcon />}
          value={this.state.money}
          onEditClick={this.handleOpenMoneyDialog}
        />
        <MoneyFormDialog
          open={this.state.openMoneyDialog}
          onSave={this.handleSaveMoney}
          onClose={this.handleCloseMoneyDialog}
        />
        <ConditionItem
          name={<Trans>ХП</Trans>}
          max={condition.max_hit_points}
          min={-1}
          value={condition.current_hit_points}
          icon={<HeartIcon />}
          onChange={(value) => this.handleChange({ condition: { current_hit_points: value }})}
        />
        <ConditionItem
          name={<Trans>Хил</Trans>}
          description={<span>+{condition.healing_value} <Trans parent='span'>хитов</Trans></span>}
          max={condition.healings_per_day}
          value={condition.healings}
          icon={<HealingIcon />}
          onChange={(value) => this.handleChange({ condition: { healings: value }})}
          />
        <ConditionItem
          name={<Trans>Спас броски</Trans>}
          max={3}
          value={3 - condition.death_save_failures}
          icon={<DeathIcon />}
          onChange={(value) => this.handleChange({ condition: { death_save_failures: 3 - value }})}
        />
        <ConditionItem
          name={<Trans>КД</Trans>}
          max={40}
          value={protections.armor_class}
          icon={<DefenceIcon />}
          onChange={(value) => this.handleChange({ protections: { armor_class: value }})}
        />
        <ConditionItem
          name={<Trans>Стойкость</Trans>}
          max={40}
          value={protections.durability}
          icon={<PoolIcon />}
          onChange={(value) => this.handleChange({ protections: { durability: value }})}
        />
        <ConditionItem
          name={<Trans>Реакция</Trans>}
          max={40}
          value={protections.reaction}
          icon={<ReactionIcon />}
          onChange={(value) => this.handleChange({ protections: { reaction: value }})}
        />
        <ConditionItem
          name={<Trans>Воля</Trans>}
          max={40}
          value={protections.will}
          icon={<TVIcon />}
          onChange={(value) => this.handleChange({ protections: { will: value }})}
        />
      </Paper>
    )
  }
}