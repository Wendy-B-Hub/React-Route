import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  getStudentData=()=>{
    axios.get('http://localhost:3000/api1/students')
    .then(
      response=>{console.log("successfully",response.data);},
      error=>{console.log('failed',error);}
    )
  }

  getCarData=()=>{
    axios.get("http://localhost:3000/api2/cars")
    .then(response=>{console.log("successfully get Data",response.data);},
          error=>{console.log("failed",error);}
          )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>Click me and get some students data</button><br/>
        <button onClick={this.getCarData}>Click me and get some car data</button>
      </div>
    )
  }
}
