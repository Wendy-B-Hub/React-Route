import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class MyNavLink extends Component {
    
  render() {
    //   console.log(`<MyNavLink to="/about">About</MyNavLink>`,this.props);
    const {to,title}=this.props;
    return (
        <NavLink activeClassName='demoStyle'  className='list-group-item' {...this.props}/>
    )
  }
}
