
import React, { Component } from 'react';
import './App2.css'
import mastercard from './photo/mastercard.svg';
import sim from './photo/sim.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '',
      text2:'',
      text3:'',
      photo:mastercard,
      text0:'WissemBanking',
      sim:sim,
      text11:"00000000000000000000",
      text21:"00000"
    };
  }
  change1=(e)=>{
    this.setState({text1:e.target.value})
    for(var el=0;el<e.target.value.length;el++){
      var newID=this.state.text11.replace('0','')
      this.setState({text11:newID})
    }
  }
  change2=(e)=>{
    this.setState({text2:e.target.value})
    for(var el=0;el<e.target.value.length;el++){
      var newDate=this.state.text21.replace('0','')
      this.setState({text21:newDate})
    }
  }
  change3=(e)=>{
    this.setState({text3:e.target.value})
  }
  render() {
    return (
      <div className='App'>
        <form > 
            <input type="text" height="50px" maxLength="20" onChange={this.change1}></input>
            <input type="text" height="50px" maxLength="5"data-placeholder="enter something" onChange={this.change2}></input>
            <input type="text" height="50px"  onChange={this.change3}></input>
        </form>
        <div className='card'>
            <p id='p0'>{this.state.text0}</p>
            <img id='sim'src={this.state.sim} alt='logo' width='90px' height='100px'></img>
            <div id="cardID"><p id='p1'>{this.state.text1}</p><p id="p11">{this.state.text11}</p></div>
            <div id="date"><p id='p2'>{this.state.text2}</p><p id="p21">{this.state.text21}</p></div>
            <p id='p3'>{this.state.text3}</p>
            <img id='mastercard'src={this.state.photo} alt='logo' width='240px' height='150px'></img>
        </div>
    </div>
    );
  }
}

export default App;