import React, { Component } from 'react'
import { Col, Row } from 'react-flexbox-grid'

export default class PageWrapper extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row center='xs'>
            <Col lg={4} md={6} sm={8} xs={12}>
              {this.props.children}
              <br/>
              <br/>
              <br/>
              <br/>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}