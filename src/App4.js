
import React, { Component } from 'react';
import './App4.css';
import But from './App4But'

class App4 extends Component {
    constructor(props){
        super(props)
        this.cons = this.cons.bind(this)

        this.state={
            valueInButton:'0',
            fact:'0'
        }
    }
    cons(e){
        this.setState({
            valueInButton:e.target.value,
            fact:e.target.value**2
        })
        console.log(this.state.valueInButton)
    }

    render() {
    return (
      <div className='App'>
        <div id='buttons'>
        <But value='4' onClick={this.cons} ></But>
        <But value='8' onClick={this.cons}></But>
        <But value='10'onClick={this.cons}></But>
        </div>
        <p>the factorial of " {this.state.valueInButton} " is :{this.state.fact}</p>
        

      </div>
    );
  }
}
export default App4;