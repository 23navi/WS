const { io } = require("../server");
const Orb = require("./classes/Orb");

const orbs = [];

initGame();

// When the new client connects
io.on("connect", (socket) => {
  socket.on("init", (socket, cb) => {
    cb({ orbs });
  });
});

function initGame() {
  for (let i = 0; i < 500; i++) {
    orbs.push(new Orb());
  }
}

module.exports = io;
