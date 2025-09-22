import { useEffect, useRef, useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Add initial bot message
    setMessages([{
      id: 1,
      text: "Hello! I'm MAITRI, your AI assistant for psychological and physical well-being. I'm listening and ready to help.",
      type: 'bot',
      timestamp: new Date()
    }]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <section className="chat-panel">
      <div className="panel-header">
        <h2>🧠 PSYCHOLOGICAL SUPPORT</h2>
        <div className="status">
          <div className="status-dot"></div>
          LISTENING
        </div>
      </div>
      
      <div className="messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.type}`}
          >
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </section>
  );
};

export default Chat; 