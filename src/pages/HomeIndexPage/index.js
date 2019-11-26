import { connect } from "react-redux"
import { set_article_list } from '../../store/storeActions'
// page
import HomeIndexPage from "./page"
// http
import http from '../../http'

const mapStateToProps = (state, ownProps) => {
  return state.home
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // 获取文章列表
    get_blog_article(navigation_id) {
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
    },
    onEditHander(e, index) {
      e.preventDefault();
      this.props.history.push(`/home/plus?index=${index}`)
    },
    onDeleteHander(e, index) {
      e.preventDefault();
      const { article_list } = this.props
      const article_id = article_list[index].id
      http({
        url: '/delete_blog_article',
        method: 'post',
        data: {
          article_id
        }
      }).then(res => {
        if(res.data.code === 200) {
          const { get_blog_article, defaultSelectedKeys } = this.props
          get_blog_article(defaultSelectedKeys[0])
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndexPage)