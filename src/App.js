import React, { useState } from 'react';
import './App.css'; 

class App extends React.Component{
   constructor(){
     super()
     this.state={
       life:10
     }
   } 
  handleClick=()=>{
    this.setState({life:this.state.life + 1});
  }
  render(){
  return (
    <div className="App"> 
        <p>
          {this.state.life}
        </p>
        <button 
        onClick={this.handleClick}
        >
        Learn React
        </button> 
    </div>
  );
 }
} 
export default App;
