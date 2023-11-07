import mongoose from "mongoose";

import { TODO_MODEL_IMPORTANCE } from "../utils/constants.js";

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "(from todoSchema) Please provide a title."],
    },
    description: {
      type: String,
      maxLength: [20, "(from todoSchema) Please provide a description shorter than 21 characters."],
    },
    importance: {
      type: String,
      enum: Object.values(TODO_MODEL_IMPORTANCE),
      required: [true, "(from todoSchema) Please provide an importance level."],
    },
    deadline: {
      type: Date,
      required: [true, "(from todoSchema) Please provide a deadline."],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);
