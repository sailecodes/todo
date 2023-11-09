import todoModel from "../models/todoModel.js";
import { NotFoundError, UnauthorizedError } from "../custom-errors/customErrors.js";

const isCreatorOrAdmin = (createdBy, userId, userRole) => {
  const isCreator = createdBy.toString() === userId;
  const isAdmin = userRole === "admin";

  return isCreator || isAdmin;
};

export const isValidResourceAndAccessible = async (queryId, userId, userRole) => {
  const userTodo = await todoModel.findById(queryId);

  if (!userTodo) throw new NotFoundError(`No todo item with id ${queryId}`);

  const cond = isCreatorOrAdmin(userTodo.createdBy, userId, userRole);

  if (!cond) throw new UnauthorizedError("Not authorized to access this resource.");

  return userTodo;
};
