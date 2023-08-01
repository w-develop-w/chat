    // import React, { useState } from 'react';
    // import './App.css';
    // import { io } from 'socket.io-client';
    // // socket.io-client is a Socket.IO client library that allows you to make WebSocket connections to servers using Socket.IO. This library provides 
    // // an interface for real-time interaction with the server and data exchange between the client and the server.
    // import Chat from './Chat';


    // const socket = io("http://localhost:3001");

    // function App() {

    //     const [userName, setUserName] = useState<string | undefined>(undefined); 
    //     const [room, setRoom] = useState<string | undefined>(undefined); 
    //     const [showChat, setShowChat] = useState(false)

    //     // When the "Join A Room" button is pressed, the joinRoom function is called, which checks that userName and room are not empty, and if so, sends
    //     // a request to join the room using the socket.emit("join_room", room) method.
    //     const joinRoom = () => {
    //         if(userName !== "" && room !== "") {
    //             socket.emit("join_room", room)
    //             setShowChat(true)
    //         }
    //     }

    //     return (
    //         <div className="App">
    //             {
    //                 !showChat ?

    //                 (<div className='joinChatContainer'>
    //                     <h3>Join a Chat</h3>
    //                     <input type='text' placeholder='John...' onChange={(event) => setUserName(event.target.value)}/>  
    //                     <input type='text' placeholder='Room ID...' onChange={(event) => setRoom(event.target.value)}/>
    //                     <button onClick={joinRoom}>Join A Room</button>

    //                 </div>)
    //                 :
    //                 (<Chat socket={socket} userName={userName} room={room} />)  
    //             }
    //         </div>
    //     );
    // }

    // export default App;

    import React, { useState } from "react";
    import './App.css';
    import { io } from 'socket.io-client';
    import Chat from './Chat';
    
    const socket = io("http://localhost:3001");
    
    function App() {
      const [userName, setUserName] = useState<string>(""); // Ensure userName is always of type string
      const [room, setRoom] = useState<string>(""); // Ensure room is always of type string
      const [showChat, setShowChat] = useState(false);
    
      // When the "Join A Room" button is pressed, the joinRoom function is called, which checks that userName and room are not empty, and if so, sends
      // a request to join the room using the socket.emit("join_room", room) method.
      const joinRoom = () => {
        if (userName !== "" && room !== "") {
          socket.emit("join_room", room);
          setShowChat(true);
        }
      };
    
      return (
        <div className="App">
          {!showChat ? (
            <div className='joinChatContainer'>
              <h3>Join a Chat</h3>
              <input
                type='text'
                placeholder='John...'
                onChange={(event) => setUserName(event.target.value)}
              />
              <input
                type='text'
                placeholder='Room ID...'
                onChange={(event) => setRoom(event.target.value)}
              />
              <button onClick={joinRoom}>Join A Room</button>
            </div>
          ) : (
            <Chat socket={socket} userName={userName} room={room} />
          )}
        </div>
      );
    }
    
    export default App;
    