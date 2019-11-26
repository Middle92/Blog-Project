import React, { Component } from 'react'
// style
import './style.scss'

export default class HomeListPage extends Component {
  state = {
    content: null
  }

  componentDidMount() {
    const { article_list, match } = this.props
    const index = match.params.index
    try {
      this.setState({
        content: article_list[index].content
      })
    } catch (error) {
      
    }
  }

  render() {
    const { content } = this.state
    return (
      <div className="home-list-page" dangerouslySetInnerHTML={{__html: content}}></div>
    )
  }
}