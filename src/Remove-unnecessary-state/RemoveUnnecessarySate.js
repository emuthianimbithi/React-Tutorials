import React, { useState, useEffect } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");

  function handleClick() {
    const inputName = prompt("What is your name?");
    setName(inputName);
  }

  useEffect(() => {
    if (name) {
      alert(`Hello, ${name}!`);
    }
  }, [name]);

  return <button onClick={handleClick}>Greet</button>;
}
