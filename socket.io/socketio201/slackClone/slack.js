const express = require("express");
const app = express();
// const Server = require('socket.io') = Server in the docs
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8001);
// io = the server object in the docs!
const io = socketio(expressServer);

// io = server in the docs
io.on("connection", (socket) => {
  socket.on("newMessageToServer", (dataFromClient) => {
    console.log("Data:", dataFromClient);
    io.emit("newMessageToClients", { text: dataFromClient.text });
  });
});
