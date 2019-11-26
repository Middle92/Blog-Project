import React, { Component } from "react"
import Http from "../../http"
import "./style.scss"

export default class SelectPicture extends Component {
  state = {
    dataURL: null
  }

  onFileChange = (e) => {
    const { onChange, id } = this.props
    let imgUrl = URL.createObjectURL(e.target.files[0])
    // 上传文件
    let formdata = new FormData()
    formdata.append("file", e.target.files[0])
    Http({
      url: "/upload",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: formdata
    }).then(res => {
      const data = res.data.data
      const dataURL = window.baseUrl + '/' + data.filePath
      this.setState({dataURL})
      onChange(id, this.state.dataURL)
    })
    // 生产图片
    let img = new Image()
    img.src = imgUrl
    img.onload = () => {
      // 创建canvas
      let canvas = document.createElement("canvas")
      let ctx = canvas.getContext('2d')
      // 图片的宽高
      let width = img.width
      let height = img.height
      // 按比例压缩
      let rate = (width < height ? 100 / height : 100 / width).toFixed(2) - 0
      canvas.width = width * rate
      canvas.height = height * rate
      // 输出图片
      ctx.drawImage(img, 0, 0, width, height, 0, 0, width * rate, height * rate)
      // 生成路径
      let dataURL = canvas.toDataURL('image/jpeg');
      this.setState({dataURL})
    }
  }

  render() {
    const { id } = this.props
    const { dataURL } = this.state
    return (
      <label htmlFor={id} className="Picture">
        <input id={id} hidden type="file" accept="image/*" onChange={this.onFileChange}/>
        {dataURL ? <img src={dataURL} alt=""/> : "+"}
      </label>
    )
  }
}