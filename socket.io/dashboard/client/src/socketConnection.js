import io from "socket.io-client";
const socket = io.connect("http://localhost:8002", {
  auth: { token: "client-desktop" },
});

socket.on("connect", () => {
  console.log("Connected to server");
});

export default socket;