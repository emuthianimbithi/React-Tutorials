import React, { useState } from "react";
import Example1 from "./Example1";
import Example2 from "./Example2";

const Condition = () => {
  const [change, setChange] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setChange(!change);
    setVisible(true);
  };

  return (
    <div>
      {change ? <Example1 /> : <Example2 />}
      <button onClick={handleClick}>Click me</button>

      <div>
        {visible && <div>Yep we can change the stuff with one click!!</div>}
      </div>
    </div>
  );
};

export default Condition;
