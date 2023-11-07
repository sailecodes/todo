import { Router } from "express";

import { getAllTodos, createTodo, getTodo, updateTodo, deleteTodo } from "../controllers/todoController.js";
import { validateIdParam, validateTodoInput } from "../middleware/validationMiddleware.js";

const todoRouter = Router();

todoRouter.route("/").get(getAllTodos).post(validateTodoInput, createTodo);
todoRouter
  .route("/:id")
  .get(validateIdParam, getTodo)
  .patch(validateIdParam, validateTodoInput, updateTodo)
  .delete(validateIdParam, deleteTodo);

export default todoRouter;
