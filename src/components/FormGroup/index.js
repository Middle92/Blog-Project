import React, { Component } from "react"
import "./style.scss"

export default class FormGroup extends Component {
  render() {
    const { htmlFor, label, children } = this.props
    return (
      <div className="FormGroup">
        <label htmlFor={htmlFor}>{label}</label>
        <div className="form-content">
          {children}
        </div>
      </div>
    )
  }
}