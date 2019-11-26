import React, { Component } from "react"
// 引入编辑器组件
import BraftEditor from "braft-editor"
import { ContentUtils } from 'braft-utils'
// antd
import { Button, Upload, Icon, Spin } from "antd"
// style
import "./style.scss"
import "braft-editor/dist/index.css"

export default class HomePlusPage extends Component {
  state = {
    // 创建一个空的editorState作为初始值
    editorState: BraftEditor.createEditorState(null)
  }

  setBraftEditor = () => {
    const { article_list, index } = this.props
      // 如果是编辑状态 就执行
      if(index && article_list.length > 0) {
        const content = article_list[index].content
        this.setState({
          editorState: BraftEditor.createEditorState(content)
        })
      } else {
        this.setState({
          editorState: BraftEditor.createEditorState(null)
        })
      }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.index !== this.props.index) {
      this.setBraftEditor()
    }
  }

  componentDidMount() {
    this.setBraftEditor()
  }

  render() {
    const { editorState } = this.state
    const { handleEditorChange, submitContent, uploadHandler, onCancel, onReset } = this.props
    // 工具栏 上传图片方法
    const customRequest = async (param) => {
      const res = await uploadHandler(param)
      this.setState({
        editorState: ContentUtils.insertMedias(this.state.editorState, [{
          type: 'IMAGE',
          url: window.baseUrl + '/' + res.data.data.filePath
        }])
      })
    }
    // 扩展控件 上传图片
    const extendControls = {
      key: 'antd-uploader',
      type: 'component',
      component: (
        <Upload
          accept="image/*"
          showUploadList={false}
          customRequest={customRequest}
        >
          {/* 这里的按钮最好加上type="button"，以避免在表单容器中触发表单提交，用Antd的Button组件则无需如此 */}
          <button type="button" className="control-item button upload-button" data-title="插入图片">
            <Icon type="picture" theme="filled" />
          </button>
        </Upload>
      )
    }
    // 控件的工具顺序
    const controls = [
      "undo", "redo", "separator",
      "font-size", "line-height", "letter-spacing", "separator",
      "text-color", "bold", "italic", "underline", "strike-through", "separator",
      "superscript", "subscript", "remove-styles", "emoji", "separator",
      "text-indent", "text-align", "separator",
      "headings", "list-ul", "list-ol", "blockquote", "code", "separator",
      "media", extendControls, "link", "table", "split", "hr", "separator",
      "clear", "separator",
      "fullscreen"
    ]
    // 媒体属性
    const media = {
      async uploadFn(param) {
        const res = await uploadHandler(param)
        param.success({
          url: window.baseUrl + '/' + res.data.data.filePath
        })
      }
    }

    return (
      <div className="home-plus-page">
        <Spin spinning={false} delay={500}>
          <BraftEditor
            ref="brafteditor"
            value={editorState}
            media={media}
            onChange={handleEditorChange.bind(this)}
            onSave={submitContent.bind(this)}
            controls={controls}
          />
        </Spin>
        <div className="btns">
          <Button type="primary" onClick={submitContent.bind(this)}>提交</Button>
          <Button type="default" onClick={onReset.bind(this)}>重置</Button>
          <Button type="default" onClick={onCancel.bind(this)}>取消</Button>
        </div>
      </div>
    )
  }
}