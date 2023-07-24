import React from "react";

const Button = ({ onClick, clicks }) => {
  //console.log(clicks)
  return (
    <button onClick={onClick}>
      You have clicked this button {clicks} hehe
    </button>
  );
};

export default Button;
