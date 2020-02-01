import React, { Component } from 'react';
import './App3Display.css';

class Display extends Component {

    constructor(props){
        super(props)
        this.state={
            gender:'male'
        }
        const border =this.border.bind(this)
    }
    
    
    
    border = () =>{
        this.setState({gender:this.props.gender})

    }
    render() {
        
        
        return (
            <div className='App'>
            <div className='display'>
            <img 
            src={this.props.photo} alt="logo" 
            height='400px' width='300px' 
            onLoad={this.border} 
            className={this.state.gender}
            ></img>
            <h3>{this.props.name}</h3>
            <p>{this.props.desc}</p>
            </div>
        </div>
        );
  }
}

export default Display;