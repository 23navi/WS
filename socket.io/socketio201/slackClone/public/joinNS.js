const joinNs = (namespaces, element) => {
  const nsClickedEndpoint = element.getAttribute("ns");
  const clickedNs = namespaces.find(
    (row) => row.endpoint === nsClickedEndpoint
  );
  const roomDiv = document.querySelector(".main-rooms .room-list");
  roomDiv.innerHTML = "";
  clickedNs.rooms.forEach((room) => {
    roomDiv.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${room.roomName}</li>`;
  });
  localStorage.setItem("lastNs", nsClickedEndpoint);
};
