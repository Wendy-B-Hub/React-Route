import React, { Component } from 'react'
import './index.css';

export default class Footer extends Component {

  //全选checkbox的回调
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked);
  }

//clearAllDone用于清除所有已完成的
  handleClearAllDone=()=>{
    this.props.clearAllDone();
  }
  render() {
    const {todos}=this.props;
    //已完成的个数，做条件统计reduce
    const doneCount=todos.reduce((pre,todo)=>{
      return pre+(todo.done?1:0)
    },0)
    //总数
    const total=todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} 
           checked={doneCount===total&&total!==0?true:false}/>
        </label>
        <span>
          <span>CompletedItems {doneCount}</span> / Total {total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
