import React, { Component } from "react"
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faList, faSignInAlt, faPlusSquare } from "@fortawesome/free-solid-svg-icons"
// router
import { Link } from "react-router-dom"
// style
import "./style.scss"

export default class Header extends Component {
  render() {
    const { list } = this.props
    return (
      <div className="header">
        <div className="header-brank">
          <Link to="/">技术博客</Link>
        </div>
      </div>
    )
  }
}