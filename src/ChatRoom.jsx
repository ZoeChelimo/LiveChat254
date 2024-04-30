import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function ChatRoom() {
  return (
    <div className="chat-room bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h1 className="text-xl font-semibold mb-4">Chat Room</h1>
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default ChatRoom;