import { Server } from "socket.io";
import { Socket } from "../types/socket.interface";
import ColumnModel from "../models/column";
import { SocketEventsEnum } from "../types/socketEvents.enum";

export const getColumns = async (
  io: Server,
  socket: Socket,
  data: { boardId: string }
) => {
  try {
    if (!socket.user) {
      throw new Error("Unauthorized");
    }
    const columns = await ColumnModel.find({ boardId: data.boardId });
    socket.emit(SocketEventsEnum.columnsGet, columns);
  } catch (err) {
    console.log(err);
  }
};

export const getColumn = async (
  io: Server,
  socket: Socket,
  data: { columnId: string }
) => {
  try {
    if (!socket.user) {
      throw new Error("Unauthorized");
    }
    const column = await ColumnModel.findById(data.columnId);
  } catch (err) {
    console.log(err);
  }
};

export const createColumn = async (
  io: Server,
  socket: Socket,
  data: { boardId: string; name: string }
) => {
  try {
    if (!socket.user) {
      throw new Error("Unauthorized");
    }
    const newColumn = new ColumnModel({
      name: data.name,
      userId: socket.user.id,
      boardId: data.boardId,
    });
    const savedColumn = await newColumn.save();
  } catch (err) {
    console.log(err);
  }
};
