import { StatusCodes } from "http-status-codes";

import todoModel from "../models/todoModel.js";
import { isValidResourceAndAccessible } from "../utils/helpers.js";

// ============================================================================
// CRUD Operations
// ============================================================================

export const getAllTodos = async (req, res) => {
  const userTodos = await todoModel.find({ createdBy: req.userInfo.userId });

  res.status(StatusCodes.OK).json({ msg: "Retrieved all user todo items.", data: userTodos, count: userTodos.length });
};

export const createTodo = async (req, res) => {
  req.body.createdBy = req.userInfo.userId;

  const userTodoCreated = await todoModel.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "Created todo item.", data: userTodoCreated });
};

export const getTodo = async (req, res) => {
  const userTodo = await isValidResourceAndAccessible(req.params.id, req.userInfo.userId, req.userInfo.userRole);

  res.status(StatusCodes.OK).json({ msg: "Retrieved user todo item.", data: userTodo });
};

export const updateTodo = async (req, res) => {
  await isValidResourceAndAccessible(req.params.id, req.userInfo.userId, req.userInfo.userRole);

  const userTodoUpdated = await todoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(StatusCodes.OK).json({ msg: "Updated todo item.", data: userTodoUpdated });
};

export const deleteTodo = async (req, res) => {
  await isValidResourceAndAccessible(req.params.id, req.userInfo.userId, req.userInfo.userRole);

  const userTodoDeleted = await todoModel.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ msg: "Deleted todo item.", data: userTodoDeleted });
};

// ============================================================================
// Additional functionality
// ============================================================================

export const getFinishedTodos = async (req, res) => {
  const finishedTodos = await todoModel.find({ createdBy: req.userInfo.userId, progress: "finished" });

  res
    .status(StatusCodes.OK)
    .json({ msg: "Retrieved finished todos.", data: finishedTodos, count: finishedTodos.length });
};

export const getPastDeadlineTodos = async (req, res) => {
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

  const pastDeadlineTodos = await todoModel.find({
    createdBy: req.userInfo.userId,
    progress: { $in: ["just started", "halfway there"] },
    deadline: { $gte: todayFormatted },
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: "Retrieved todos past deadline.", data: pastDeadlineTodos, count: pastDeadlineTodos.length });
};

// FIXME:
//  - Might potentially have a bug where if the user creates a todo item with a deadline of `right now`, what to do?
//    - Potential fixes:
//      - createdAt < deadline
//      - Do something similar to the one above
export const getNewestTodo = async (req, res) => {
  const newestTodo = await todoModel
    .find({
      createdBy: req.userInfo.userId,
      progress: { $in: ["just started", "halfway there"] },
    })
    .sort({ createdAt: -1 });

  res.status(StatusCodes.OK).json({ msg: "Retrieved newest todo.", data: newestTodo[0] });
};

// TODO:
export const getComingTodos = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "Not yet implemented." });
};
