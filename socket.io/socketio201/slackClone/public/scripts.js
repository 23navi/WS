const socket = io("http://localhost:8002"); // io is available in global scope as we added that to layout.html script

// const socketWiki = io("http://localhost:8002/wiki");
// const socketMozilla = io("http://localhost:8002/mozilla");
// const socketLinux = io("http://localhost:8002/linux");

const nameSpaceSockets = {};

const addListener = (nsId, eventName) => {
  nameSpaceSockets[ns.id]["socket"].on(eventName, (val) => {
    // Do somechange
  });
  nameSpaceSockets[ns.id][eventName] = true;
};

socket.on("connect", () => {
  socket.emit("clientConnectDefaultNS");
  console.log("Connected from script.js");
});

socket.on("nsList", (namespaces) => {
  const nameSpaceDiv = document.querySelector(".namespaces");
  nameSpaceDiv.innerHTML = "";
  namespaces.forEach((ns) => {
    nameSpaceDiv.innerHTML += `<div class="namespace" ns="${ns.endpoint}"><img src="${ns.image}"></div>`;

    // If only there is no connection for that NS is not available, we will add
    if (!nameSpaceSockets[ns.id]) {
      nameSpaceSockets[ns.id] = {};
      nameSpaceSockets[ns.id]["socket"] = io(
        `http://localhost:8002${ns.endpoint}`
      );
      if (nameSpaceSockets[ns.id]["ns-change"]) {
        nameSpaceSockets[ns.id]["socket"].on("ns-change", (val) => {
          // Do somechange
        });
        nameSpaceSockets[ns.id]["ns-change"] = true;
      }
      Array.from(document.getElementsByClassName("namespace")).forEach(
        (element) => {
          element.addEventListener("click", (e) => {
            joinNs(namespaces, element);
          });
        }
      );
    }
  });

  const lastUsedNSendpoint = localStorage.getItem("lastNs");
  console.log({ lastUsedNSendpoint });
  joinNs(namespaces, document.getElementsByClassName("namespace")[0]); // this ns will be selected when the page first loads
});
