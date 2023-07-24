import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Box = () => {
    const [character, setCharacter] = useState(null);
    const handleClick = () => {
      character ? setCharacter(null) : setCharacter("X");
    };
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
      {character}
    </Button>
  );
};

export default Box;
