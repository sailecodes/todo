import { StatusCodes } from "http-status-codes";

import userModel from "../models/userModel.js";
import todoModel from "../models/todoModel.js";
import { NotFoundError } from "../custom-errors/customErrors.js";

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
  const date = new Date();
  const todayUnformatted = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
  const todayFormatted = `${todayUnformatted.month < 10 ? `0` + todayUnformatted.month : todayUnformatted.month}/${
    todayUnformatted.day < 10 ? `0` + todayUnformatted.day : todayUnformatted.day
  }/${todayUnformatted.year} ${todayUnformatted.hour < 10 ? `0` + todayUnformatted.hour : todayUnformatted.hour}:${
    todayUnformatted.minute < 10 ? `0` + todayUnformatted.minute : todayUnformatted.minute
  }`;

  const todosPastDeadline = await todoModel.find({
    createdBy: req.userInfo.userId,
    progress: { $in: ["just started", "halfway there"] },
    deadline: { $gte: todayFormatted },
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: "Retrieved todos past deadline.", data: todosPastDeadline, count: todosPastDeadline.length });
};

export const getUserTodoDueMostSoon = async (req, res) => {
  const todosDueMostSoon = await todoModel.find({
    createdBy: req.userInfo.userId,
    progress: { $in: ["just started", "halfway there"] },
  });
};

export const getUserTodosComing = async (req, res) => {};
