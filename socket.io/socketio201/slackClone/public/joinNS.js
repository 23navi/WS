const joinNs = (namespaces, element) => {
  const nsClickedEndpoint = element.getAttribute("ns");
  const clickedNs = namespaces.find(
    (row) => row.endpoint === nsClickedEndpoint
  );
  const roomDiv = document.querySelector(".main-rooms .room-list");
  roomDiv.innerHTML = "";
  clickedNs.rooms.forEach((room) => {
    roomDiv.innerHTML += `<li class="room" namespaceId=${clickedNs.id}><span class="fa-glyphicon fa-glyphicon-lock"></span>${room.roomName}</li>`;
  });

  const roomNodes = document.querySelectorAll(".room");
  Array.from(roomNodes).forEach((room) => {
    room.addEventListener("click", (e) => {
      e.preventDefault();
      // I have to call joinRoom and create an listeiner
      const namespaceId = e.target.getAttribute("namespaceId");
      joinRoom(e.target.innerText, namespaceId);
    });
  });
  localStorage.setItem("lastNs", nsClickedEndpoint);
};
