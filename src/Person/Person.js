import React from 'react';

const person = (props) => {
  return (
    <div>
      <h1>Hi </h1>
      <p>
        Hi my name is {props.name} and I am {props.age} years old
      </p>
    </div>
  );
};

export default person;
