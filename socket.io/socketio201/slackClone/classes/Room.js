class Room {
  constructor(roomId, roomName, nameSpaceId, privateRoom = false) {
    this.roomId = roomId;
    this.roomName = roomName;
    this.nameSpaceId = nameSpaceId;
    this.privateRoom = privateRoom;
    this.history = []; // chat history
  }

  addMessage(message) {
    this.history.push(message);
  }

  clearHistory() {
    this.history = [];
  }
}

module.exports = Room;
