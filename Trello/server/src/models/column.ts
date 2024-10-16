import { Schema, model } from "mongoose";
import { ColumnDocument } from "../types/column.interface";

const ColumnSchema = new Schema<ColumnDocument>({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  boardId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

export default model<ColumnDocument>("Column", ColumnSchema);
