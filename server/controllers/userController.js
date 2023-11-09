import { StatusCodes } from "http-status-codes";

import userModel from "../models/userModel.js";
import todoModel from "../models/todoModel.js";
import { NotFoundError } from "../custom-errors/customErrors.js";
import { getCurrentDateAndTime } from "../utils/helpers.js";

export const getUser = async (req, res) => {
  const user = await userModel.findById(req.userInfo.userId).select("-_id -password -__v");

  if (!user) throw new NotFoundError(`No user with id ${req.userInfo.userId}`);

  res.status(StatusCodes.OK).json({ msg: "Retrieved user information.", data: user });
};

export const getUserTodosFinished = async (req, res) => {
  const todosFinished = await todoModel.find({ createdBy: req.userInfo.userId, progress: "finished" });

  res
    .status(StatusCodes.OK)
    .json({ msg: "Retrieved finished todos.", data: todosFinished, count: todosFinished.length });
};

export const getUserTodosPastDeadline = async (req, res) => {
  const todayFormatted = getCurrentDateAndTime();

  const todosPastDeadline = await todoModel.find({
    createdBy: req.userInfo.userId,
    progress: { $in: ["just started", "halfway there"] },
    deadline: { $gte: todayFormatted },
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: "Retrieved todos past deadline.", data: todosPastDeadline, count: todosPastDeadline.length });
};

export const getUserTodoNewest = async (req, res) => {
  const todayFormatted = getCurrentDateAndTime();

  const todoNewest = await todoModel
    .find({
      createdBy: req.userInfo.userId,
      progress: { $in: ["just started", "halfway there"] },
    })
    .sort({ createdAt: -1 });

  res.status(StatusCodes.OK).json({ msg: "Retrieved newest todo.", data: todoNewest[0] });
};

// TODO:
export const getUserTodosComing = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "Not yet implemented." });
};
