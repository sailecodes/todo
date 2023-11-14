import { StatusCodes } from "http-status-codes";

import todoModel from "../models/todoModel.js";
import { getCurrentDateAndTime, isValidResourceAndAccessible } from "../utils/helpers.js";
import { TODO_MODEL_PROGRESS } from "../utils/constants.js";

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

  if (!req.body.deadline) {
    req.body = { ...req.body, $unset: { deadline: "" } };
  }

  const userTodoUpdated = await todoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(StatusCodes.OK).json({ msg: "Updated todo item.", data: userTodoUpdated });
};

export const deleteTodo = async (req, res) => {
  await isValidResourceAndAccessible(req.params.id, req.userInfo.userId, req.userInfo.userRole);

  const userTodoDeleted = await todoModel.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ msg: "Deleted todo item.", data: userTodoDeleted });
};

// ============================================================================
// Home page functionality
// ============================================================================

export const getFinishedTodos = async (req, res) => {
  const finishedTodos = await todoModel.find({ createdBy: req.userInfo.userId, progress: "finished" });

  res.status(StatusCodes.OK).json({ msg: "Retrieved finished todos.", count: finishedTodos.length });
};

export const getPastDeadlineTodos = async (req, res) => {
  const pastDeadlineTodos = await todoModel.find({
    createdBy: req.userInfo.userId,
    progress: { $in: [TODO_MODEL_PROGRESS.JUST_STARTED, TODO_MODEL_PROGRESS.HALFWAY_THERE] },
    deadline: { $lt: getCurrentDateAndTime() },
  });

  res.status(StatusCodes.OK).json({ msg: "Retrieved todos past deadline.", count: pastDeadlineTodos.length });
};

export const getNewestTodo = async (req, res) => {
  const newestTodo = await todoModel
    .find({
      createdBy: req.userInfo.userId,
      progress: { $in: [TODO_MODEL_PROGRESS.JUST_STARTED, TODO_MODEL_PROGRESS.HALFWAY_THERE] },
      deadline: { $gte: getCurrentDateAndTime() },
    })
    .sort({ createdAt: -1 });

  res.status(StatusCodes.OK).json({ msg: "Retrieved newest todo.", data: newestTodo[0] });
};

export const getComingTodos = async (req, res) => {
  const comingTodos = await todoModel.find({
    createdBy: req.userInfo.userId,
    progress: { $in: [TODO_MODEL_PROGRESS.JUST_STARTED, TODO_MODEL_PROGRESS.HALFWAY_THERE] },
    deadline: { $gte: getCurrentDateAndTime() },
  });

  res.status(StatusCodes.OK).json({ msg: "Retrieved coming todos.", data: comingTodos.slice(0, 4) });
};

// ============================================================================
// Todo page functionality
// ============================================================================

export const getDailyTodos = async (req, res) => {
  const dailyTodos = await todoModel.find({ createdBy: req.userInfo.userId, type: "daily" });

  res.status(StatusCodes.OK).json({ msg: "Retrieved daily todos.", data: dailyTodos, count: dailyTodos.length });
};

export const getWeeklyTodos = async (req, res) => {
  const weeklyTodos = await todoModel.find({ createdBy: req.userInfo.userId, type: "weekly" });

  res.status(StatusCodes.OK).json({ msg: "Retrieved weekly todos.", data: weeklyTodos, count: weeklyTodos.length });
};
