import { StatusCodes } from "http-status-codes";

import todoModel from "../models/todoModel.js";

export const getAllTodos = async (req, res) => {
  const userTodos = await todoModel.find({ createdBy: req.body.userInfo.userId });

  res.status(StatusCodes.OK).json({ userTodos });
};

export const createTodo = async (req, res) => {
  req.body.createdBy = req.body.userInfo.userId;

  await todoModel.create(req.body);

  res.status(StatusCodes.OK).json({ msg: "Created todo item." });
};

export const getTodo = async (req, res) => {
  res.status(StatusCodes.OK).send("get a todo");
};

export const updateTodo = async (req, res) => {
  res.status(StatusCodes.OK).send("update a todo");
};

export const deleteTodo = async (req, res) => {
  res.status(StatusCodes.OK).send("delete a todo");
};
