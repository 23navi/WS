const socket = io("http://localhost:8001"); // io is available in global scope as we added that to layout.html script

socket.on("connect", () => {
  console.log("Connected from script.js");
});

socket.on("nsList", (namespaces) => {
  const nameSpaceDiv = document.querySelector(".namespaces");
  namespaces.forEach((ns) => {
    nameSpaceDiv.innerHTML += `<div class="namespace" ns="${ns.name}"><img src="${ns.image}"></div>`;
  });
  console.log({ namespaces });
});
