import React, { Component } from "react";

const Biginversion = props => {

  return (
    <div>
      <h1>{props.lastName}, {props.firstName}</h1>
      <p>Age: {props.age}</p>
      <p>Hair color: {props.hairColor}</p>
    </div>
  );
};
export default Biginversion;
