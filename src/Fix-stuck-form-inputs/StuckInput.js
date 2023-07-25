import React, { useState } from "react";

export default function Form() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstChange = (event) => { 
        setFirstName(event.target.value);
    }
    const handleLastChange = (event) => {
      setLastName(event.target.value);
    };
    const handleReset = () => {
        setFirstName("");
        setLastName("");
    };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstChange}
      />
      <input placeholder="Last name" value={lastName} onChange={handleLastChange} />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
