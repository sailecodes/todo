import { StatusCodes } from "http-status-codes";

import todoModel from "../models/todoModel.js";
import { isCreatorOrAdmin } from "../utils/helpers.js";
import { NotFoundError, UnauthorizedError } from "../custom-errors/customErrors.js";

export const getAllTodos = async (req, res) => {
  const userTodos = await todoModel.find({ createdBy: req.userInfo.userId });

  res.status(StatusCodes.OK).json({ msg: "Retrieved all user todo items.", data: userTodos });
};

export const createTodo = async (req, res) => {
  req.body.createdBy = req.userInfo.userId;

  const userTodo = await todoModel.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "Created todo item.", data: userTodo });
};

export const getTodo = async (req, res) => {
  const userTodo = await todoModel.findById(req.params.id);

  if (!userTodo) throw new NotFoundError(`No todo item with id ${req.params.id}`);

  const cond = isCreatorOrAdmin(userTodo.createdBy, req.userInfo.userId, req.userInfo.userRole);

  if (!cond) throw new UnauthorizedError("Not authorized to access this resource.");

  res.status(StatusCodes.OK).json({ msg: "Retrieved user todo item.", data: userTodo });
};

export const updateTodo = async (req, res) => {
  const userTodo = await todoModel.findById(req.params.id);

  if (!userTodo) throw new NotFoundError(`No todo item with id ${req.params.id}`);

  const cond = isCreatorOrAdmin(userTodo.createdBy, req.userInfo.userId, req.userInfo.userRole);

  if (!cond) throw new UnauthorizedError("Not authorized to access this resource.");

  const userTodoUpdated = await todoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(StatusCodes.OK).json({ msg: "Updated todo item.", data: userTodoUpdated });
};

export const deleteTodo = async (req, res) => {
  res.status(StatusCodes.OK).send("delete a todo");
};
