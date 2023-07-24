import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick} style={{ margin: "20px" }}>
      Clicked {props.count} times
    </button>
  );
}

export default Button