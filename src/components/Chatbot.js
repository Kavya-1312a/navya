import React, { useState, useRef, useEffect } from 'react';
import "./main.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm your HomeChef Assistant. How can I help you today?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // Add user message
      setMessages(prev => [...prev, { type: 'user', text: inputMessage }]);
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: "I'm here to help! What would you like to know about our home chefs or meals?" 
        }]);
      }, 1000);

      setInputMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <button 
        id="chatbot-icon" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-comments"></i>
      </button>
      
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <h3>HomeChef Assistant</h3>
            <button 
              className="close-chatbot" 
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.type}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot; 