import React, { Component } from 'react'
import axios from 'axios';


export default class Search extends Component {
  search=()=>{
    //===============1.获取用户的输入(连续解构赋值+重命名)
    // console.log(this.input1.value);
    const {input1:{value:keyWord}}=this;
    //===============2.发送请求前通知App更新状态
    this.props.updateAppState({isFirst:false,isLoading:true})
   //===============3.发送网络请求
     axios.get(`https://api.github.com/search/users?q=${keyWord}`)
     .then(response=>{
       //4.1请求成功后通知App更新状态
      //  console.log('succeeded',response.data)
      // this.props.saveUsers(response.data.items);
      this.props.updateAppState({isLoading:false,users:response.data.items})
     },
      error=>{
        //4.2请求失败后通知App更新状态
        // console.log('failed',error)
        this.props.updateAppState({isLoading:false,err:error.message})
      });
  }

  render() {
    return (
      <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input ref={c=>this.input1=c} type="text" placeholder="enter the name you search"/>&nbsp;
        <button onClick={this.search}>Search</button>
      </div>
    </section>
    )
  }
}
