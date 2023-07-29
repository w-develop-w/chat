import React from 'react';
import './App.css';
import { io } from 'socket.io-client';
// socket.io-client is a Socket.IO client library that allows you to make WebSocket connections to servers using Socket.IO. This library provides 
// an interface for real-time interaction with the server and data exchange between the client and the server.
import { useState } from 'react'

// Уточняем тип для объекта socket
const socket = io("http://localhost:3001");

function App() {

    const [userName, setUserName] = useState()

  return (
    <div className="App">
        <h3>Join a Chat</h3>
        <input type='text' placeholder='John...'/>  
        <input type='text' placeholder='Room ID...'/>
        <button>Join A Room</button>  
    </div>
  );
}

export default App;
