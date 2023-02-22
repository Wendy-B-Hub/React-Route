import React, { Component } from 'react'

export default class News extends Component {
    //*2秒后，有news页面跳转至message页面
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.props.history.push('/home/message'); 
    //     },2000)
    // }
    render() {
        return (
            <div>
                <ul>
                    <li>news001</li>
                    <li>news002</li>
                    <li>news003</li>
                </ul>
            </div>
        )
    }
}
