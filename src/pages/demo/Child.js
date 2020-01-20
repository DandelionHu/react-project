import React, {Component} from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('dis mount')
  }

  componentWillReceiveProps(newProps, any) {
    console.log('WillReceiveProps')
    console.log(newProps.name)
  }

  shouldComponentUpdate() {
    console.log('should update')
    return true
  }

  componentWillUpdate() {
    console.log('will update')
  }

  componentDidUpdate() {
    console.log('did update')
  }

  render() {
    return <div>
      <p>child组件</p>
      <p>{this.props.name}</p>
    </div>
  }
}


export default Child