import React, { Component } from "react"
import "./style.scss"

export default class InputSelect extends Component {
  state = {
    status: false,
    value: ""
  }

  componentDidMount() {
    document.onclick = (e) => {
      this.setState({status: false})
    }
  }

  onInput = (e) => {
    e.nativeEvent.stopImmediatePropagation()
    this.setState({status: true})
  }
  
  onSelectList = (e) => {
    const { onChange, id} = this.props
    e.nativeEvent.stopImmediatePropagation()
    this.setState({value: e.target.innerText, status: false}, () => {
      onChange(id, this.state.value)
    })
  }

  onInputChange = (e) => {
    const { onChange, id} = this.props
    this.setState({value: e.target.value})
    onChange(id, e)
  }

  render() {
    const { status, value } = this.state
    const { id, selectList } = this.props
    
    const selectListElement = []
    selectList.forEach((item, index) => {
      if(item.name.indexOf(value) >= 0) {
        selectListElement.push(<li key={item + index} value={item.name} onClick={this.onSelectList}>{item.name}</li>)
      }
    })
    return (
      <div className="InputSelect">
        <input id={id} onClick={this.onInput} onChange={this.onInputChange} value={value}/>
        {
          (status && selectListElement.length > 0) && (
            <ul className="class-option">
              {selectListElement}
            </ul>
          )
        }
      </div>
    )
  }
}