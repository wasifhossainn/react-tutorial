import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> Wow </h1>
        <Person name='Molly' age='23'>
          G'day Mate
        </Person>
        <button> Switch Name</button>
      </div>
    );
  }
}

export default App;
