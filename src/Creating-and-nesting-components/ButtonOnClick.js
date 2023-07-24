import React, { useState } from "react";
import Button from "./Button";

const ButtonOnClick = () => {
  const [clicks, setClicks] = useState(0);

  const onClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  return <Button onClick={onClick} clicks={clicks} />;
};

export default ButtonOnClick;
