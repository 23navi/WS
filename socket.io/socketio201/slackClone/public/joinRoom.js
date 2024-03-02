const joinRoom = async (roomName, nsId) => {
  // callback style for emit
  //   nameSpaceSockets[nsId]["socket"].emit(
  //     "joinRoom",
  //     { roomName, nsId },
  //     (value1, value2) => {
  //       console.log(`${value1} and ${value2}  is what we get from server`);
  //     }
  //   );
  const [value1, value2] = await nameSpaceSockets[nsId]["socket"].emitWithAck(
    "joinRoom",
    {
      roomName,
      nsId,
    }
  );
  console.log({ value1 });
};
