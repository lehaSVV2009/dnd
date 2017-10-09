import React, {Component} from 'react'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'

import './Footer.css'

export default class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  handleSelect = (selected) => {
    this.setState({ selected })
  }

  render() {
    const { buttons } = this.props;

    if (!Array.isArray(buttons)) {
      return (<div/>)
    }

    return (
      <Paper className='footer'>
        <BottomNavigation 
          value={this.state.selected}
          showLabels
        >
          {
            buttons.map((button, index) => (
              <BottomNavigationButton
                key={index}
                icon={button.icon}
                label={button.label}
                onClick={() => {
                  this.setState({ selected: index })
                  button.onClick()
                }}
              />
            )) 
          }
        </BottomNavigation>
      </Paper>
    )
  }
}