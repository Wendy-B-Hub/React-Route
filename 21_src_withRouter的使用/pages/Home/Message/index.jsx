import React, { Component } from 'react'
import Detail from './Detail';
import {Link,Route} from 'react-router-dom';

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: 'msg1' },
            { id: '02', title: 'msg2' },
            { id: '03', title: 'msg3' },
        ]
    }
    replaceShow=(id,title)=>{
        console.log("replace",this.props)
        //*replace跳转+携带params参数
            this.props.history.replace(`/home/message/detail/${id}/${title}`)
        //*replace跳转+携带search参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        //*replace跳转+携带state参数
        // this.props.history.replace(`/home/message/detail`,{id,title})
    }
    pushShow=(id,title)=>{       
         //*push跳转+携带params参数
        this.props.history.push(`/home/message/detail/${id}/${title}`)
        //*push跳转+携带search参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
        //*push跳转+携带state参数
        // this.props.history.push(`/home/message/detail`,{id,title})
    }
    back=()=>{
        this.props.history.goBack()
    }
    forward=()=>{
        this.props.history.goForward()
    }
    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>
                                        {msgObj.title}</Link>&nbsp;&nbsp;

                                    {/* <Link to="/home/message/detail">{msgObj.title}</Link>&nbsp;&nbsp; */}

                                    {/* 向路由组件传递search参数 ,像是query参数*/}
                                    {/*<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>
                                        {msgObj.title}</Link>&nbsp;&nbsp; */}
                                    {/* 向路由组件传递state参数 */}
                                    {/* <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>
                                        {msgObj.title}</Link>&nbsp;&nbsp;  */}
                                        <button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>Push model</button>&nbsp;
                                        <button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>Replace model</button>&nbsp;
                                </li>
                            )

                        })
                    }
                </ul>
                <hr />
                {/* 声明接收params参数 */}
                <Route path="/home/message/detail/:id/:title" component={Detail}/>

                {/* search参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail} /> */}

                 {/* state参数无需声明接收，正常注册路由即可 */}
                 {/* <Route path="/home/message/detail" component={Detail} /> */}
                 <button onClick={this.back}>back</button>&nbsp;
                 <button onClick={this.forward}>forward</button>
            </div>
        )
    }
}
