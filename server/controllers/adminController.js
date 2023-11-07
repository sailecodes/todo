import { StatusCodes } from "http-status-codes";

import userModel from "../models/userModel.js";
import todoModel from "../models/todoModel.js";
import { TODO_MODEL_IMPORTANCE, TODO_MODEL_PROGRESS } from "../utils/constants.js";

export const getApplicationStats = async (req, res) => {
  const totalUsers = await userModel.countDocuments();
  const totalTodos = await todoModel.countDocuments();

  const finishedLowTodos = await todoModel.find({
    importance: TODO_MODEL_IMPORTANCE.LOW,
    progress: TODO_MODEL_PROGRESS.FINISHED,
  });
  const finishedMediumTodos = await todoModel.find({
    importance: TODO_MODEL_IMPORTANCE.MEDIUM,
    progress: TODO_MODEL_PROGRESS.FINISHED,
  });
  const finishedHighTodos = await todoModel.find({
    importance: TODO_MODEL_IMPORTANCE.HIGH,
    progress: TODO_MODEL_PROGRESS.FINISHED,
  });

  res.status(StatusCodes.OK).json({
    msg: "Retrieved admin-only information.",
    data: {
      totalUsers,
      totalTodos,
      finishedLowTodos: finishedLowTodos.length,
      finishedMediumTodos: finishedMediumTodos.length,
      finishedHighTodos: finishedHighTodos.length,
    },
  });
};
