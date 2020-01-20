import React, {Component} from 'react'
import {Button} from 'antd'
import Child from './Child'
import './demo.less'


class Life extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return <div className="container">
      <Button onClick={this.handleAdd}>antd点击一下</Button>
      <button onClick={this.handleAdd}>点击一下</button>
      <button onClick={this.aa}>点击一下</button>
      <p>{this.state.count}</p>
      <Child name={this.state.count}></Child>
    </div>
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}


export default Life