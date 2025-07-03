
import React, { useState } from 'react';

function AskAllInChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input) return;
    const newMessage = { role: 'user', content: input };
    setMessages([...messages, newMessage]);

    const response = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();
    setMessages([...messages, newMessage, { role: 'assistant', content: data.reply }]);
    setInput('');
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, right: 0, width: 350, backgroundColor: 'white', border: '1px solid #ccc', padding: 10 }}>
      <h4>Ask ALL-IN (AI Assistant)</h4>
      <div style={{ maxHeight: 200, overflowY: 'auto', marginBottom: 10 }}>
        {messages.map((msg, idx) => (
          <div key={idx}><strong>{msg.role}:</strong> {msg.content}</div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default AskAllInChat;
