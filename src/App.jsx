import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import ChatRoom from './ChatRoom';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCaE0LWQL5IjXpI9eVPtZ7X3P8TMfEnKMQ",
  authDomain: "chatapp-f0b9b.firebaseapp.com",
  projectId: "chatapp-f0b9b",
  storageBucket: "chatapp-f0b9b.appspot.com",
  messagingSenderId: "119113541480",
  appId: "1:119113541480:web:ca1de28a0ef809ee6b18dd",
  measurementId: "G-4KN5YEBT27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex justify-center items-center">
      <ChatRoom />
    </div>
  );
}

export default App;