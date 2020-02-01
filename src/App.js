
import React, { Component } from 'react';
import './App.css'
import photo1 from './photo/photo1.jpg';
import photo0 from './photo/photo0.svg';
import photo2 from './photo/photo2.jpg';
import photo3 from './photo/photo3.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'name',
      desc:"description",
      photo : photo0
    };
  }
  person1 = () => {
    this.setState(state => ({ 
      name:"Valverdiii",
      desc:"Nos Futuro",
      photo: photo1
     }));
  };
  person2 = () => {
    this.setState(state => ({ 
        name:"Marcelo",
        desc:"mi amore",
        photo: photo2

     }));   
  };
  person3 = () => {
    this.setState(state => ({ 
        name:"Toni Kroos",
        desc:" EL Mecanico",
        photo: photo3
     }));
  };
  render() {

    return (
      <div className='App'>
        <button onClick={this.person3} type="button" >
          player1
        </button>
        <button onClick={this.person2} type="button">
          player2
        </button>
        <button onClick={this.person1} type="button">
          player3
        </button>
        <div>
          <img src={this.state.photo} alt="logo" height='400px' width='300px'></img>
          <h3>{this.state.name}</h3>
          <p>{this.state.desc}</p>
        </div>
      </div>
    );
  }
}

export default App;