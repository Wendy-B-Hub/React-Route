import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log("路由组件About组件的props",this.props);
    return (
      <div>About</div>
    )
  }
}
