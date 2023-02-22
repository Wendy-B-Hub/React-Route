import React, { Component } from 'react'
import './index.css';
export default class Item extends Component {

  state={mouse:false};  //*标识鼠标移入、移出

  //*鼠标移入、移出的回调
  mouseHandle=(flag)=>{
    return ()=>{
      this.setState({mouse:flag});
    }
  }

  //*勾选、取消勾选某一个todo的回调
  handleCheck=(id)=>{
    return(event)=>{
      // console.log(id,event.target.checked);
      this.props.updateTodo(id,event.target.checked);
    }
  }
  //*删除一个todo的回调
  handleDelete=(id)=>{
    if(window.confirm("Are you sure to delete this item?")){
      this.props.deleteTodo(id);
    }
  }
  render() {
    const {id,name,done}=this.props;
    const {mouse}=this.state;
    return (
      <li style={{background:mouse?'#ddd':'white'}}
      onMouseLeave={this.mouseHandle(false)} onMouseEnter={this.mouseHandle(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
}
