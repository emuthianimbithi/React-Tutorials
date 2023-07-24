import React, { useState } from "react";
import Button from "./Button";

const Hooks = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    };
    const handleClick1 = () => {
      setCount1(count1 + 1);
    };

  return (
    <div >
      <Button count={count} handleClick={handleClick} />
      <Button count={count1} handleClick={handleClick1} />
    </div>
  );
};

export default Hooks;
