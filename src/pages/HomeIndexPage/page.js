import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
// style
import './style.scss'

export default class HomeIndexPage extends Component {
  componentDidMount() {
    const { get_blog_article, defaultSelectedKeys } = this.props
    get_blog_article(defaultSelectedKeys[0])
  }

  render() {
    const { article_list, onEditHander, onDeleteHander } = this.props
    return (
      <div className="home-index-page">
        {
          article_list.map((item, index) => {
            return (
              <Link className="list" key={item.id} to={`/home/list/${index}`} style={{color: '#333'}}>
                <div className="list_image">
                  <img src={item.article_image} alt={item.id}/>
                </div>
                <div className="list_detail">
                  <div className="list_detail_div">
                    <h1 title={item.article_title}>{item.article_title}</h1>
                    <Icon type="edit" onClick={(e) => {onEditHander.bind(this)(e, index)}}/>
                    <Icon type="delete" onClick={(e) => {onDeleteHander.bind(this)(e, index)}}/>
                  </div>
                  <p className="list_subtitle">{item.article_subtitle}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    )
  }
}