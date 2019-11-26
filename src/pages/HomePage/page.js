import React, { Component } from "react"
// router
import { HomeRoute, HomeMenu, HomeIcon } from "../../route"
import { Link, Switch, Route } from "react-router-dom"
// style
import "./style.scss"
// antd
import { Layout, Menu, Icon } from 'antd'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout

export default class HomePage extends Component {
  
  componentDidMount() {
    const { get_navigation_list } = this.props
    get_navigation_list()
  }

  render() {
    const { navigation_list, defaultSelectedKeys, defaultOpenKeys, onMenuOpenChange, onMenuSelect, onMenuClick } = this.props

    return (
      <Layout className="home-page">
        {/* header */}
        <Header className="header">
          {/* logo */}
          <div className="logo">
            <Link to={`/home`}>博客</Link>
          </div>
          {/* menu */}
          <div className="menu">
            <Menu theme="dark" mode="horizontal">
              {
                HomeMenu.map(option => {
                  const { key, to, label } = option
                  return (
                    <Menu.Item key={key}>
                      <Link to={to}>
                        {label}
                      </Link>
                    </Menu.Item>
                  )
                })
              }
              
            </Menu>
          </div>
          {/* icon */}
          <div className="icon">
            {
              HomeIcon.map(option => {
                const { key, to, icon} = option
                return (
                  <Link key={key} to={to}>
                    <Icon type={icon}/>
                  </Link>
                )
              })
            }
          </div>
        </Header>
        {/* content */}
        <Layout className="content">
          {/* sider */}
          <Sider className="sider" width={200}>
            <Menu 
              className="sider-menu" 
              mode="inline" 
              openKeys={defaultOpenKeys}
              defaultSelectedKeys={defaultSelectedKeys} 
              onOpenChange={onMenuOpenChange.bind(this)}
              onSelect={onMenuSelect.bind(this)}
              onClick={onMenuClick.bind(this)}>
              {
                navigation_list.map(option => (
                  <SubMenu
                    key={option.id}
                    title={
                      <span>
                        {option.icon && <Icon type={option.icon} />}
                        {option.label}
                      </span>
                    }
                  >
                    {
                      option.children.map(coption => (
                        <Menu.Item key={coption.id}>
                          <Link to={`/home`}>{coption.label}</Link>
                        </Menu.Item>
                      ))
                    }
                  </SubMenu>
                ))
              }
            </Menu>
          </Sider>
          <Layout>
            {/* content */}
            <Content style={{ margin: '10px', background: '#fff', overflow: 'auto' }}>
              <Switch>
                {
                  HomeRoute.map((option) => (
                    <Route {...option} />
                  ))
                }
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}