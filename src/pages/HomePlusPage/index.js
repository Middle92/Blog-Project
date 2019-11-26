import { connect } from 'react-redux'
import HomePlusPage from './page'
// http
import http from "../../http"
// 引入编辑器组件
import { ContentUtils } from 'braft-utils'

const mapStateToProps = (state, ownProps) => {
  // 判断是否编辑状态 location.search.index: 文章列表下标
  const { location } = ownProps
  const search = location.search
  const searchObject = {}
  // location.search 转换 对象
  search.replace('?', '').split('&').forEach(item => {
    if(item) {
      searchObject[item.split('=')[0]] = item.split('=')[1]
    }
  })
  const newState = JSON.parse(JSON.stringify(state.home))
  return Object.assign(newState, searchObject)
}

const mapDisaptchToProps = (dispatch, ownProps) => {
  return {
    // 图片上传
    uploadHandler(param) {
      if (!param.file) {
        return false
      }
      const formData = new FormData()
      formData.append('files', param.file)
      return http({
        url: '/upload',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: formData
      })
    },
    // 编辑器 提交
    async submitContent() {
      const { defaultSelectedKeys, history, index, article_list} = this.props
      // 在编辑器获得焦点时按下ctrl+s会执行此方法
      // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
      const htmlContent = this.state.editorState.toHTML()
      const select_id = defaultSelectedKeys[0]
      if(!select_id) {
        alert('选择分类')
        return false
      }
      const data = {
        select_id: select_id,
        article_content: htmlContent
      }
      if(index) {
        Object.assign(data, {
          article_id: article_list[index].id
        })
      }
      http({
        url: '/post_submit_blog',
        method: 'post',
        data: data
      }).then(res => {
        history.goBack()
      })
    },
    // 编辑器 改变事件
    handleEditorChange(editorState) {
      this.setState({ editorState })
    },
    // 取消事件
    onCancel() {
      const { history } = this.props
      history.goBack()
    },
    onReset() {
      this.setState({
        editorState: ContentUtils.clear(this.state.editorState)
      })
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(HomePlusPage)