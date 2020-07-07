
import React, { Component } from 'react';
import './App3.css';
import Display from './App3Display';
import photo1 from './photo/woman.svg';
import photo2 from './photo/man.svg';
import photo3 from './photo/girl.svg';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <Display name= "Mannoubia" photo= {photo1}  desc='cfdkjn' gender='female'></Display>
          <Display name= "Ftou7" photo= {photo2}  desc='fejhdfj' gender='male'></Display>
          <Display name= "Lamis" photo= {photo3}  desc='fkejdskfj' gender='female'></Display>
      </div>
    );
  }
}
export default App;
