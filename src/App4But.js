
import React, { Component } from 'react';


class But extends Component {
    constructor(){
        super()
        this.state={
            factVal:'0',
            fact:()=>{
                this.setState({factVal:this.props.value**2})
            }
        }
    }
  render() {
    return (
      <div className='App'>
          <button onClick={this.state.fact} onClick={this.props.onClick} value={this.props.value}>{this.props.value}</button>
          
      </div>
    );
  }
}
export default But;