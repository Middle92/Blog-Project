import React from "react"
import ReactDOM from "react-dom"
// redux
import { Provider } from "react-redux"
import store from "./store"
// page
import App from "./pages/App"
// router
import { BrowserRouter as Router } from "react-router-dom"
// antd
import 'antd/dist/antd.css'

console.log(2)
const Main = () => (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
)

ReactDOM.render(<Main/>, document.getElementById("root"))