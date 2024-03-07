const socketMain = (io) => {
  // What happens if we return the listener? Works in both the cases
  return io.on("connection", (socket) => {
    const { token } = socket.handshake.auth;

    if (token === "client-server") {
      // This is the emitter node server which will send data to our system
      console.log("client-server connected");
    } else if (token === "client-desktop") {
      // This is the client desktop which will show all the different data from different service
      console.log("client-desktop connected");
    } else {
      // We won't anyone else to connect to our server
      socket.disconnect();
    }
    console.log("Socket connected to to " + process.pid);
  });
};

module.exports = socketMain;
