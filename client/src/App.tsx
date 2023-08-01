import React, { useState } from "react"
import "./App.css"
import { io } from "socket.io-client"
import Chat from "./Chat"
import { setUserName, setRoom, setShowChat } from "./store/dataSlice"
import { useAppDispatch, useAppSelector } from "./hooks"

const socket = io("http://localhost:3001")

function App() {
    const dispatch = useAppDispatch()
    const userName = useAppSelector((state) => state.dataOfChat.userName)
    const room = useAppSelector((state) => state.dataOfChat.room)
    const showChat = useAppSelector((state) => state.dataOfChat.showChat)

    const joinRoom = () => {
        if (userName !== "" && room !== "") {
            socket.emit("join_room", room)
            dispatch(setShowChat(true))
        }
    }

    return (
        <div className="App">
            {!showChat ? (
                <div className="joinChatContainer">
                    <h3>Join a Chat</h3>
                    <input
                        type="text"
                        placeholder="Name..."
                        onChange={(event) =>
                            dispatch(setUserName(event.target.value))
                        }
                    />
                    <input
                        type="text"
                        placeholder="Room ID..."
                        onChange={(event) =>
                            dispatch(setRoom(event.target.value))
                        }
                    />
                    <button onClick={joinRoom}>Join A Room</button>
                </div>
            ) : (
                <Chat socket={socket} userName={userName} room={room} />
            )}
        </div>
    )
}

export default App
