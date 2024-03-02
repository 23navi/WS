const joinRoom = (roomName, nsId) => {
  nameSpaceSockets[nsId]["socket"].emit("joinRoom", { roomName, nsId });
  console.log({ roomName, nsId });
};
