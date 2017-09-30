import React, { Component } from 'react'
import { Col, Row } from 'react-flexbox-grid'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'

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
        <Col xs={5}>
          <List>
            <ListItem
              disabled={true}
              leftIcon={this.props.icon}
            >
              {this.props.name}
              {this.props.description}
            </ListItem>
          </List>
        </Col>
        <Col xs={3}/>
        <Col xs={3}>
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
