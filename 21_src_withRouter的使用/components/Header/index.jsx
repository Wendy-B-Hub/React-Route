import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class Header extends Component {
  back=()=>{
    console.log("Header",this.props)
    this.props.history.goBack()
  }
  forward=()=>{
    this.props.history.goForward()
  }
  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>back</button>&nbsp;
        <button onClick={this.forward}>forward</button>
      </div>
    )
  }
}
//*withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
//*withRouter的返回值是一个新组件
export default withRouter(Header);