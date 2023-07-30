// Connect fraimwork Express. It used for create web-applications and handle HTTP-requires
const express = require("express");
// Create exemplar of application Express
const app = express();
// Connecting build-in module "http" which allow ctreate HTTP-server 
const http = require("http");
// We connect the 'cors' library, which handles CORS (Cross-Origin Resource Sharing) and allows you to configure permissions for accessing the server from another domain
const cors = require("cors");

// Connect library 'socket.io' and destructure object for fetching access to constructor "Server" from this library 
const { Server } = require("socket.io") 

// Add using 'cors' in application Express. It mean that server will permit requires from any domain, that can be usefull for developing and testing   
app.use(cors());

// Creating of HTTP-server thanks to owr Express-application 'app' 
const server = http.createServer(app)

// Creating of exemplar of socket.io server  and passed to the http server we created with http.createServer(app). Now socket.io will work with this server
// and handle WebSocket connections and other transports.
const io = new Server(server, {
    // This sets the CORS setting for the socket.io server. This means that the server only allows connections from the "http://localhost:3000" domain. Other 
    // domains cannot establish a WebSocket connection with this server due to the Same-Origin Policy. The 'methods' array defines the allowed HTTP methods for CORS requests.
    cors: {
        origin: "http://localhost:3000", 
        methods: ["GET", "POST"]  
    }
})


// This block of code is responsible for handling the "connection" event, which occurs when a new client establishes a WebSocket connection to the socket.io server. When 
// the client connects, the callback function (socket) => { ... } is executed.
io.on("connection", (socket) => {
    // When a client connects, the socket.io server generates a unique ID for each socket (connected client). Using socket.id, we print the identifier of the connected client to the console.
    console.log(`User Connected: ${socket.id}`)


    // When the client sends a request to join a room (the "join_room" event), the server calls the function to handle this event. This function joins the client to the specified room using 
    // socket.join(data), where data is the name of the room that the client passes in the request.
    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`User with ID: ${socket.id} joined room: ${data}`)
    })


    // The "send_message" event is handled on the server with socket.on("send_message", (data) => { ... }). When the client sends a message with the "send_message" event, the server calls this
    // handler and outputs a data object to the console, which is data about the message sent by the client.
    socket.on("send_message", (data) => {
        // console.log(data)
        socket.to(data.room).emit("receive_message",data)
    })

    // This piece of code handles the "disconnect" event, which happens when the client disconnects from the server. When the client disconnects, the callback function () => { ... } is executed, 
    // and we print the message "User Disconnect" and the id of the disconnected client (socket.id) to the console.
    socket.on('disconnect', () => {
        console.log("User Disconnect", socket.id)
    })
}) 


// Server begine to lestening of port 3001. When server is running we show in console message "SERVER RUNNING"  
server.listen(3001, () => {
    console.log("SERVER RUNNING")
})