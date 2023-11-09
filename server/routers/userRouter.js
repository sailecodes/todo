import { Router } from "express";
import {
  getUser,
  getUserTodosFinished,
  getUserTodosPastDeadline,
  getUserTodoNewest,
  getUserTodosComing,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", getUser);
userRouter.get("/todos-finished", getUserTodosFinished);
userRouter.get("/todos-past-deadline", getUserTodosPastDeadline);
userRouter.get("/todo-newest", getUserTodoNewest);
userRouter.get("/todos-coming", getUserTodosComing);

export default userRouter;
