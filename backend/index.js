require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 3001;

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, { cors: true });

io.on("connection", (socket) => {
  console.log(`New User joined with Socket ID: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`User with socket ID: ${socket.id} left.`);
  });
});

httpServer.listen(PORT, () =>
  console.log(`${process.env.STAGE} server running on port ${PORT}`)
);
