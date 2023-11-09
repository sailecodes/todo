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

export const getCurrentDateAndTime = () => {
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

  return todayFormatted;
};
