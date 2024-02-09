const express = require("express");
const app = express();
// const Server = require('socket.io') = Server in the docs
const socketio = require("socket.io");
const namespaces = require("./data/namespaces");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8001); // http traffic
// io = the server object in the docs!
const io = socketio(expressServer); // ws/tcp traffic

// io = server in the docs
io.on("connection", (socket) => {
  console.log(socket.id + "has connected");
  socket.on("newMessageToServer", (dataFromClient) => {
    console.log("Data:", dataFromClient);
    io.emit("newMessageToClients", { text: dataFromClient.text });
  });

  socket.emit("nsList", namespaces);
});
