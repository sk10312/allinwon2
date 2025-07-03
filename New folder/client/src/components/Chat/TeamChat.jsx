
import React, { useState } from 'react';

function TeamChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const newMessage = { sender: 'User', text: input };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div>
      <h3>Team Chat</h3>
      <div style={{ border: '1px solid #ccc', height: 200, overflowY: 'scroll' }}>
        {messages.map((msg, idx) => <div key={idx}><strong>{msg.sender}:</strong> {msg.text}</div>)}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default TeamChat;
