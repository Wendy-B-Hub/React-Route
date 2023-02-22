import React, { Component } from 'react'
import qs from 'query-string'

const DetailData = [
	{id:'01',content:'你好，中国'},
	{id:'02',content:'你好，尚硅谷'},
	{id:'03',content:'你好，未来的自己'}
]

export default class Detail extends Component {
  render() {
    console.log("Detail",this.props)
    //*============= 接收params参数
    const {id,title}=this.props.match.params;
   // *==============接收search参数
  //  const {search}=this.props.location;
  //  const result=qs.parse(search); 
  //  console.log(result);
  //  const {id,title}=qs.parse(search); 
  //* 接收state参数
// const {id,title}=this.props.location.state;

    const findResult=DetailData.find((detailObj)=>{
      return detailObj.id===id
    })
    return (
      <ul>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>context:{findResult.content}</li>
      </ul>
    )
  }
}
