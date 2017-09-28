import React, { Component } from 'react'

import BadgedItem from './BadgedItem'

export default class BadgedIcons extends Component {

  render() {
    const { items } = this.props;

    if (!Array.isArray(items)) {
      return (<div>Иконки отсутствуют</div>)
    }

    return (
      <div>
        {
          items.map((item, index) => (
            <div>
              <BadgedItem value={item.value}>
                {item.icon}
              </BadgedItem>     
            </div>    
          ))
        }
      </div>
    )
  }
}