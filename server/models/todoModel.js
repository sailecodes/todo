import mongoose from "mongoose";

import { TODO_MODEL_IMPORTANCE } from "../utils/constants.js";

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    importance: {
      type: String,
      enum: Object.values(TODO_MODEL_IMPORTANCE),
    },
    deadline: {
      type: Date,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);
