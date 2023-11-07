import { Router } from "express";

import { getAllTodos, createTodo, getTodo, updateTodo, deleteTodo } from "../controllers/todoController.js";
import { validateTodoInput } from "../middleware/validationMiddleware.js";

const todoRouter = Router();

todoRouter.route("/").get(getAllTodos).post(validateTodoInput, createTodo);
todoRouter.route("/:id").get(getTodo).patch(validateTodoInput, updateTodo).delete(deleteTodo);

export default todoRouter;
