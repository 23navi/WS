const socket = io("http://localhost:8001"); // io is available in global scope as we added that to layout.html script

socket.on("connection", () => {
  console.log("Connected from script.js");
  socket.emit("Connectedddddd");
});

socket.on("cc", (...data) => {
  console.log(data);
  console.log("CC ran");
});
