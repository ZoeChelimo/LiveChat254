import React, { useState } from 'react';
import firebase from 'firebase/app';

function MessageInput() {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const messagesRef = firebase.database().ref('messages');
    messagesRef.push({ text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex">
      <input type="text" value={text} onChange={handleInputChange} placeholder="Type your message..." className="w-full border border-gray-300 rounded-l-md py-2 px-4" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-md">Send</button>
    </form>
  );
}

export default MessageInput;