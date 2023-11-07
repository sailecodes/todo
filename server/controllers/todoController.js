import { StatusCodes } from "http-status-codes";

import todoModel from "../models/todoModel.js";
import { isValidResourceAndAccessible } from "../utils/helpers.js";

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
