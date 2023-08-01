import express, { Express } from "express";
import http from "http";
import cors from "cors";
import { Server, Socket } from "socket.io";
import { SendMessageData } from "./types";

const app: Express = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data: string) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data: SendMessageData) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnect", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
