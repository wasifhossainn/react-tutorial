import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className='Person'>
      <p>
        Hi my name is {props.name} and I am {props.age} years old
      </p>
      <input type='text' value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;
