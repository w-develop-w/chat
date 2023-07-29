// Connect fraimwork Express. It used for create web-applications and handle HTTP-requires
const express = require("express");
// Create instance of application Express
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

// Creating of instance of socket.io server  and passed to the http server we created with http.createServer(app). Now socket.io will work with this server
// and handle WebSocket connections and other transports.
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", 
        methods: ["GET", "POST"]  
    }
})

io.on("connection", (socket) => {
    console.log(socket.id)

    socket.on('disconnect', () => {
        console.log("User Disconnect", socket.id)
    })
}) 


// Server begine to lestening of port 3001. When server is running we show in console message "SERVER RUNNING"  
server.listen(3001, () => {
    console.log("SERVER RUNNING")
})