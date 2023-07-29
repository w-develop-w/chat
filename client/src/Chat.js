import React, { useState } from "react"

function Chat({ socket, userName, room }) {
    const [currentMessage, setCurrentMessage] = useState("")

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                userName: userName,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }

            // the socket.emit("send_message", messageData) function sends the generated object to the server with the "send_message" event. This allows the client to send a message to the server.
            await socket.emit("send_message", messageData)
        }
    }

    return (
        <div>
            <div className="chat-header">
                <p>Live Chat</p>
            </div>

            <div className="chat-body"></div>
            <div className="chat-footer">
                <input
                    type="text"
                    placeholder="Hey..."
                    onChange={(event) => setCurrentMessage(event.target.value)}
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    )
}

export default Chat
