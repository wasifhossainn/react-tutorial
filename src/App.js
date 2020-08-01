import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 25,
      },
      {
        name: 'Steph',
        age: 26,
      },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        {
          name: 'Steph',
          age: 26,
        },
        {
          name: 'Max',
          age: 25,
        },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1> Wow </h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />

        <button onClick={this.switchNameHandler}> Switch Name</button>
      </div>
    );
  }
}

export default App;
