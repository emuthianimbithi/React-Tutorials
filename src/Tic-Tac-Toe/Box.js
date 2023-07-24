import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Box = ({value,handleClick}) => {
  return (
    <Button
      xs={1}
      variant="outline-dark"
      className="border text-center"
      onClick={handleClick}
      style={{
        width: "50px",
        height: "35px",
        display: "inline-block",
      }}
    >
      {value}
    </Button>
  );
};

export default Box;
