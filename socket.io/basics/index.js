const express = require("express");
const socketio = require("socket.io");

const app = express();
app.use(express.static(__dirname + "/public"));
const expressServer = app.listen(8000); // http server on port 8000
const io = socketio(expressServer); // ws server on port 8000

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.emit("name", { data: "yoo" });
});
