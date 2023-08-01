// import React, { useEffect, useState } from "react";
// import ScrollToBottom from 'react-scroll-to-bottom'

// function Chat({ socket, userName, room }) {
//     const [currentMessage, setCurrentMessage] = useState("");
//     const [messageList, setMessageList] = useState([]);

//     const sendMessage = async () => {
//         if (currentMessage !== "") {
//             const messageData = {
//                 room: room,
//                 userName: userName,
//                 message: currentMessage,
//                 time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
//             };

//             await socket.emit("send_message", messageData);
//             setMessageList((list) => [...list, messageData]);
//         }
//     };

//     useEffect(() => {
//         socket.on("receive_message", (data) => {
//             setMessageList((list) => [...list, data]);
//         });
//     }, [socket]);

//     const handleKeyPress = (event) => {
//         event.key === "Enter" && sendMessage();
//     };

//     return (
//         <div className="chat-window">
//             <div className="chat-header">
//                 <p>Live Chat</p>
//             </div>

//             <div className="chat-body">  
//                 <ScrollToBottom className="message-container">
//                     {messageList.map((messageContent) => {
//                         return (
//                             <div className="message" id={userName === messageContent.userName ? "you" : "other"}>
//                                 <div>
//                                     <div className="message-content">
//                                         <p>{messageContent.message}</p>
//                                     </div>

//                                     <div className="message-meta">
//                                         <p id="time">{messageContent.time}</p>
//                                         <p id="author">{messageContent.userName}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </ScrollToBottom>   
//             </div>
//             <div className="chat-footer">
//                 <input
//                     type="text"
//                     value={currentMessage}
//                     placeholder="Input your message"
//                     onChange={(event) => setCurrentMessage(event.target.value)}
//                     onKeyDown={handleKeyPress} 
//                 />
//                 <button onClick={sendMessage}>&#9658;</button>
//             </div>
//         </div>
//     );
// }

// export default Chat;



// import React, { useEffect, useState } from "react";
// // import ScrollToBottom from 'react-scroll-to-bottom'



// interface MessageData {
//   room: string;
//   userName: string;
//   message: string;
//   time: string;
// }

// interface ChatProps {
//   socket: SocketIOClient.Socket;
//   userName: string;
//   room: string;
// }

// const Chat: React.FC<ChatProps> = ({ socket, userName, room }) => {
//   const [currentMessage, setCurrentMessage] = useState<string>("");
//   const [messageList, setMessageList] = useState<MessageData[]>([]);

//   const sendMessage = async () => {
//     if (currentMessage !== "") {
//       const messageData: MessageData = {
//         room: room,
//         userName: userName,
//         message: currentMessage,
//         time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
//       };

//       await socket.emit("send_message", messageData);
//       setMessageList((list) => [...list, messageData]);
//     }
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data: MessageData) => {
//       setMessageList((list) => [...list, data]);
//     });
//   }, [socket]);

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     event.key === "Enter" && sendMessage();
//   };

//   return (
//     <div className="chat-window">
//       <div className="chat-header">
//         <p>Live Chat</p>
//       </div>

//       <div className="chat-body">
//         <ScrollToBottom className="message-container">
//           {messageList.map((messageContent, index) => {
//             return (
//               <div key={index} className="message" id={userName === messageContent.userName ? "you" : "other"}>
//                 <div>
//                   <div className="message-content">
//                     <p>{messageContent.message}</p>
//                   </div>

//                   <div className="message-meta">
//                     <p id="time">{messageContent.time}</p>
//                     <p id="author">{messageContent.userName}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </ScrollToBottom>
//       </div>
//       <div className="chat-footer">
//         <input
//           type="text"
//           value={currentMessage}
//           placeholder="Input your message"
//           onChange={(event) => setCurrentMessage(event.target.value)}
//           onKeyDown={handleKeyPress}
//         />
//         <button onClick={sendMessage}>&#9658;</button>
//       </div>
//     </div>
//   );
// };

// export default Chat;


// import React, { useEffect, useRef, useState } from "react";

// interface MessageData {
//   room: string;
//   userName: string;
//   message: string;
//   time: string;
// }

// interface ChatProps {
//   socket: SocketIOClient.Socket;
//   userName: string;
//   room: string;
// }

// const Chat: React.FC<ChatProps> = ({ socket, userName, room }) => {
//   const [currentMessage, setCurrentMessage] = useState<string>("");
//   const [messageList, setMessageList] = useState<MessageData[]>([]);
//   const chatContainerRef = useRef<HTMLDivElement>(null);

//   const sendMessage = async () => {
//     if (currentMessage !== "") {
//       const messageData: MessageData = {
//         room: room,
//         userName: userName,
//         message: currentMessage,
//         time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
//       };

//       await socket.emit("send_message", messageData);
//       setMessageList((list) => [...list, messageData]);
//       scrollToBottom();
//     }
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data: MessageData) => {
//       setMessageList((list) => [...list, data]);
//       scrollToBottom();
//     });
//   }, [socket]);

//   const scrollToBottom = () => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   };

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       sendMessage();
//     }
//   };

//   return (
//     <div className="chat-window">
//       <div className="chat-header">
//         <p>Live Chat</p>
//       </div>

//       <div className="chat-body" ref={chatContainerRef}>
//         {messageList.map((messageContent, index) => (
//           <div
//             key={index}
//             className="message"
//             id={userName === messageContent.userName ? "you" : "other"}
//           >
//             <div>
//               <div className="message-content">
//                 <p>{messageContent.message}</p>
//               </div>

//               <div className="message-meta">
//                 <p id="time">{messageContent.time}</p>
//                 <p id="author">{messageContent.userName}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="chat-footer">
//         <input
//           type="text"
//           value={currentMessage}
//           placeholder="Input your message"
//           onChange={(event) => setCurrentMessage(event.target.value)}
//           onKeyDown={handleKeyPress}
//         />
//         <button onClick={sendMessage}>&#9658;</button>
//       </div>
//     </div>
//   );
// };

// export default Chat;

import React, { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client"; // Make sure you import the correct type

interface MessageData {
  room: string;
  userName: string;
  message: string;
  time: string;
}

interface ChatProps {
  socket: Socket; // Ensure you use the correct type for Socket
  userName: string;
  room: string;
}

const Chat: React.FC<ChatProps> = ({ socket, userName, room }) => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<MessageData[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData: MessageData = {
        room: room,
        userName: userName,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      scrollToBottom();
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: MessageData) => {
      setMessageList((list) => [...list, data]);
      scrollToBottom();
    });
  }, [socket]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>

      <div className="chat-body" ref={chatContainerRef}>
        {messageList.map((messageContent, index) => (
          <div
            key={index}
            className="message"
            id={userName === messageContent.userName ? "you" : "other"}
          >
            <div>
              <div className="message-content">
                <p>{messageContent.message}</p>
              </div>

              <div className="message-meta">
                <p id="time">{messageContent.time}</p>
                <p id="author">{messageContent.userName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Input your message"
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};

export default Chat;