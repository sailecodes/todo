import mongoose from "mongoose";

import { TODO_MODEL_IMPORTANCE, TODO_MODEL_PROGRESS, TODO_MODEL_TYPE } from "../utils/constants.js";

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
      default: "Easy peasy.",
    },
    type: {
      type: String,
      enum: Object.values(TODO_MODEL_TYPE),
      default: TODO_MODEL_TYPE.NOTHING,
    },
    importance: {
      type: String,
      enum: Object.values(TODO_MODEL_IMPORTANCE),
      default: TODO_MODEL_IMPORTANCE.LOW,
    },
    deadline: {
      type: Date,
    },
    progress: {
      type: String,
      enum: Object.values(TODO_MODEL_PROGRESS),
      default: TODO_MODEL_PROGRESS.JUST_STARTED,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);
