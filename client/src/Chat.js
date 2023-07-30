import React, { useEffect, useState } from "react";

function Chat({ socket, userName, room }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                userName: userName,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    const handleKeyPress = (event) => {
        event.key === "Enter" && sendMessage();
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Live Chat</p>
            </div>

            <div className="chat-body">
                {messageList.map((messageContent) => {
                    return (
                        <div className="message" id={userName === messageContent.userName ? "you" : "other"}>
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
                    );
                })}
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    placeholder="Hey..."
                    onChange={(event) => setCurrentMessage(event.target.value)}
                    onKeyDown={handleKeyPress} // Заменили onKeyPress на onKeyDown
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    );
}

export default Chat;
