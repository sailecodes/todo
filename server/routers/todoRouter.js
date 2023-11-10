import { Router } from "express";

import {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
  getFinishedTodos,
  getPastDeadlineTodos,
  getNewestTodo,
  getComingTodos,
  getDailyTodos,
  getWeeklyTodos,
} from "../controllers/todoController.js";
import { validateIdParam, validateTodoInput } from "../middleware/validationMiddleware.js";

const todoRouter = Router();

todoRouter.route("/").get(getAllTodos).post(validateTodoInput, createTodo);

todoRouter.get("/finished", getFinishedTodos);
todoRouter.get("/past-deadline", getPastDeadlineTodos);
todoRouter.get("/newest", getNewestTodo);
todoRouter.get("/coming", getComingTodos);
todoRouter.get("/daily", getDailyTodos);
todoRouter.get("/weekly", getWeeklyTodos);

todoRouter
  .route("/:id")
  .get(validateIdParam, getTodo)
  .patch(validateIdParam, validateTodoInput, updateTodo)
  .delete(validateIdParam, deleteTodo);

export default todoRouter;
