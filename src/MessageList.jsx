import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';

function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', (snapshot) => {
      const messageData = snapshot.val();
      if (messageData) {
        const messageList = Object.values(messageData);
        setMessages(messageList);
      }
    });

    return () => messagesRef.off('value');
  }, []);

  return (
    <ul className="overflow-auto max-h-48">
      {messages.map((message, index) => (
        <li key={index} className="mb-2 p-2 bg-gray-200 rounded-md">{message.text}</li>
      ))}
    </ul>
  );
}

export default MessageList;