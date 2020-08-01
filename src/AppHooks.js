import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const AppHooks = (props) => {
  const [personsState, setPersonsState] = useState({
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
  });

  const switchNameHandler = () => {
    setPersonsState({
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

  return (
    <div className='App'>
      <h1> Hooks Function </h1>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />

      <button onClick={switchNameHandler}> Switch Name</button>
    </div>
  );
};

export default AppHooks;
