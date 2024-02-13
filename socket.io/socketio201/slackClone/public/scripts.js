const socket = io("http://localhost:8001"); // io is available in global scope as we added that to layout.html script

const socketWiki = io("http://localhost:8001/wiki");
const socketMozilla = io("http://localhost:8001/mozilla");
const socketLinux = io("http://localhost:8001/linux");

socket.on("connect", () => {
  socket.emit("clientConnectDefaultNS");
  console.log("Connected from script.js");
});

socket.on("nsList", (namespaces) => {
  const nameSpaceDiv = document.querySelector(".namespaces");
  nameSpaceDiv.innerHTML = "";
  namespaces.forEach((ns) => {
    nameSpaceDiv.innerHTML += `<div class="namespace" ns="${ns.endpoint}"><img src="${ns.image}"></div>`;
  });

  Array.from(document.getElementsByClassName("namespace")).forEach(
    (element) => {
      element.addEventListener("click", (e) => {
        joinNs(namespaces, element);
      });
    }
  );

  const lastUsedNSendpoint = localStorage.getItem("lastNs");
  console.log({ lastUsedNSendpoint });
  joinNs(namespaces, document.getElementsByClassName("namespace")[0]); // this ns will be selected when the page first loads
});
