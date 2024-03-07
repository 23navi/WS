const socketMain = (io) => {
  // What happens if we return the listener? Works in both the cases
  io.on("connection", (socket) => {
    const { token } = socket.handshake.auth;

    if (token === "client-server") {
      // This is the emitter node server which will send data to our system
      console.log("client-server connected");
      socket.join("client-server");
    } else if (token === "client-desktop") {
      // This is the client desktop which will show all the different data from different service
      console.log("client-desktop connected");
      socket.join("client-desktop");
    } else {
      // We won't anyone else to connect to our server
      socket.disconnect();
    }
    console.log("Socket connected to to " + process.pid);

    // This server will recieve perfdata from client-server and will emit event with same name to client-desktop
    socket.on("perfData", (data) => {
      io.to("client-desktop").emit("perfData", data);
      console.log("---------------");
      console.log({ data });
      console.log("---------------");
    });
  });
};

module.exports = socketMain;
