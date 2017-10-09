import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import { Col, Row } from 'react-flexbox-grid'
import List, {ListItem, ListItemText} from 'material-ui/List'

import LabeledSlider from './LabeledSlider'

export default class ConditionItem extends Component {

  handleChange = (value) => this.props.onChange(value)

  render() {
    let { min, max, step, value } = this.props;
    min = min || 0
    max = max || 100
    step = step || 1
    value = value >= min && value <= max ? value: min

    return (
      <Row>
        <Col xs={4}>
          <List>
            <ListItem disabled={true}>
              <Avatar>
                {this.props.icon}
              </Avatar>
              <ListItemText primary={this.props.name} secondary={this.props.description} />
            </ListItem>
          </List>
        </Col>
        <Col xs={1}/>
        <Col xs={6}>
          <LabeledSlider
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={this.handleChange}
          />
        </Col>
        <Col xs={1}/>
      </Row>
    )
  }
}
