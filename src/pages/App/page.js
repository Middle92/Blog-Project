import React, { Component } from "react"
// style
import "./style.scss"
// router
import { AppRoute, AppRedirect } from "../../route"
import { Route, Switch, Redirect } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Redirect {...AppRedirect} />
        <Switch>
          {
            AppRoute.map((option) => (
              <Route {...option} />
            ))
          }
        </Switch>
      </div>
    )
  }
}