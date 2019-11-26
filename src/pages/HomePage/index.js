import { connect } from "react-redux"
import { set_navigation_list, set_menu_selected_keys, set_menu_open_keys, set_article_list } from "../../store/storeActions"
// page
import HomePage from "./page"
// http
import http from '../../http'

const mapStateToProps = (state, ownProps) => {
  // state
  return state.home
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // 获取 导航列表
    get_navigation_list() {
      http({
        url: '/get_navigation_list',
        method: 'get'
      }).then(res => {
        let openKeys = res.data.data.map(item => String(item.id))
        dispatch(set_menu_open_keys(openKeys))
        dispatch(set_navigation_list(res.data.data))
      })
    },
    // 展开 事件
    onMenuOpenChange(openKeys) {
      dispatch(set_menu_open_keys(openKeys))
    },
    // 选中 事件
    onMenuSelect({ selectedKeys }) {
      dispatch(set_menu_selected_keys(selectedKeys))
    },
    // 左侧导航 点击事件
    onMenuClick(option) {
      // 文章内容请求
      const navigation_id = option.key
      http({
        url: '/get_blog_article',
        method: 'get', 
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          navigation_id
        }
      }).then(res => {
        dispatch(set_article_list(res.data.data))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)