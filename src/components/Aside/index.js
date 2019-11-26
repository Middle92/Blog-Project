import React, { Component } from "react"
import "./style.scss"

export default class Aside extends Component {
  render() {
    const { list } = this.props
    return (
      <div className="Aside">
        <ul className="aside-list">
          {
            list.map((item, index) => {
              return (<li key={item + index}>{item.name}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}