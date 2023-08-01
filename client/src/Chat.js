import React, { useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { setCurrentMessage, setMessageList } from "./store/dataSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

function Chat({ socket, userName, room }) {
  const currentMessage = useAppSelector((state) => state.dataOfChat.currentMessage);
  const messageList = useAppSelector((state) => state.dataOfChat.messageList);
  const dispatch = useAppDispatch();

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        userName: userName,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      dispatch(setMessageList((list) => [...list, messageData]));
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      dispatch(setMessageList((list) => [...list, data]));
    });
  }, [socket, dispatch]); // Include 'dispatch' in the dependency array

  const handleKeyPress = (event) => {
    event.key === "Enter" && sendMessage();
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>

      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList && messageList.map((messageContent, index) => (
            <div key={index} className="message" id={userName === messageContent.userName ? "you" : "other"}>
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
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Input your message"
          onChange={(event) => dispatch(setCurrentMessage(event.target.value))}
          onKeyDown={handleKeyPress}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
