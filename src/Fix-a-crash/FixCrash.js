import React, { useState } from "react";

export default function MessageForm() {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
