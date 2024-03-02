const express = require("express");
const app = express();
// const Server = require('socket.io') = Server in the docs
const socketio = require("socket.io");


app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8002); // http traffic
// io = the server object in the docs!
const io = socketio(expressServer); // ws/tcp traffic
