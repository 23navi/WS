const socketMain = (io) => {
  // What happens if we return the listener? Works in both the cases
  return io.on("connection", (socket) => {
    console.log("Socket connected to to " + process.pid);
  });
};

module.exports = socketMain;
