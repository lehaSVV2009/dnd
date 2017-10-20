import React, {Component} from 'react'
import ButtonBase from 'material-ui/ButtonBase'
import CircularProgressbar from 'react-circular-progressbar'
import TextField from 'material-ui/TextField'

import FormDialog from './FormDialog'
import * as DndUtils from '../utils/dndUtils'
import './ExperienceProgress.css'

export default class ExperienceProgress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addedExperience: 0,
      experience: props.experience,
      open: false,
      percentage: DndUtils.calculatePercentage(props.experience)
    }
  }

  handleExperienceSave = () => {
    const addedExperience = Number.parseInt(this.state.addedExperience, 10)
    if (addedExperience) {
      const newExperience = this.state.experience + addedExperience
      this.props.onChange({
        profile: {
          experience : newExperience
        }
      })
      this.setState({ 
        experience: newExperience,
        addedExperience: 0,
        percentage: DndUtils.calculatePercentage(newExperience)
      })
    }
    this.handleFormDialogClose()
  }

  handleExperienceChange = (event) => {
    this.setState({
      addedExperience: event.target.value 
    })
  }

  handleProgressClick = () => {
    this.setState({open: true})
  }

  handleFormDialogClose = () => {
    this.setState({open: false})
  }

  render() {
    const { experience, percentage } = this.state
    return (
      <div>
        <ButtonBase
          onClick={this.handleProgressClick}
        >
          <CircularProgressbar
            percentage={percentage}
            initialAnimation={true}
            textForPercentage={() => `${experience}`}
          />
        </ButtonBase>
        <FormDialog 
          title='Опыт'
          open={this.state.open}
          onClose={this.handleFormDialogClose}
          onSave={this.handleExperienceSave}
        >
          <TextField
            label='Добавить опыт'
            value={this.state.addedExperience}
            onChange={this.handleExperienceChange}
            type='number'
          />
        </FormDialog>
      </div>
    )
  }
}