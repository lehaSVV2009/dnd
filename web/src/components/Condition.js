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
import CounterFormDialog from './CounterFormDialog'
import EditableConditionItem from './EditableConditionItem'

export default class Condition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      money: props.condition.money,
      openMoneyDialog: false,
      current_hit_points: props.condition.current_hit_points,
      openHitPointsDialog: false,
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

  handleOpenHitPointsDialog = () => {
    this.setState({
      openHitPointsDialog: true
    })
  }

  handleSaveHitPoints = (value) => {
    if (value) {
      const newHitPoints = this.state.current_hit_points + value
      this.handleChange({ condition: { current_hit_points: newHitPoints }})
      this.setState({ 
        openHitPointsDialog: false,
        current_hit_points: newHitPoints,
      })
    }
  }

  handleCloseHitPointsDialog = () => {
    this.setState({
      openHitPointsDialog: false
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
        <EditableConditionItem
          name={<Trans>Деньги</Trans>}
          icon={<MoneyIcon />}
          value={this.state.money}
          onEditClick={this.handleOpenMoneyDialog}
        />
        {/* TODO move to editable condition item */}
        <CounterFormDialog
          title={<Trans>Деньги</Trans>}
          label={<Trans>Добавить деньги</Trans>}
          open={this.state.openMoneyDialog}
          onSave={this.handleSaveMoney}
          onClose={this.handleCloseMoneyDialog}
        />
        <EditableConditionItem
          name={<Trans>ХП</Trans>}
          icon={<HeartIcon />}
          value={this.state.current_hit_points}
          onEditClick={this.handleOpenHitPointsDialog}
        />
        {/* TODO move to editable condition item */}
        <CounterFormDialog
          title={<Trans>ХП</Trans>}
          label={<Trans>Добавить ХП</Trans>}
          open={this.state.openHitPointsDialog}
          onSave={this.handleSaveHitPoints}
          onClose={this.handleCloseHitPointsDialog}
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