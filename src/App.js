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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: event.target.value,
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
    };

    return (
      <div className='App'>
        <h1> Hi, I am a React App </h1>
        <button style={style} onClick={this.switchNameHandler}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
      </div>
    );
  }
}

export default App;
