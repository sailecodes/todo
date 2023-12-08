import mongoose from "mongoose";
import date from "date-and-time";
import jwt from "jsonwebtoken";
import { body, param, cookie, validationResult } from "express-validator";

import userModel from "../models/userModel.js";
import { BadRequestError, UnauthenticatedError, UnauthorizedError } from "../custom-errors/customErrors.js";
import {
  TODO_MODEL_IMPORTANCE,
  TODO_MODEL_PROGRESS,
  TODO_MODEL_TYPE,
  VALIDATION_DATE_FORMAT,
} from "../utils/constants.js";

const validate = (validationValues) => {
  return [
    validationValues,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        if (errorMessages[0].startsWith("Authentication")) throw new UnauthenticatedError("Authentication invalid.");
        else throw new BadRequestError(errorMessages);
      }

      next();
    },
  ];
};

// ==============================================
// General validation
// ==============================================

export const validateUser = validate([
  cookie("token").custom((token, { req, res }) => {
    if (!token) throw new UnauthenticatedError("Authentication invalid.");

    try {
      // Verifies the JWT and retrieves the payload embedded in the JWT
      const { userId, userRole } = jwt.verify(token, process.env.JWT_SECRET);

      // Creates a userInfo property in req.body for use in the restricted routes
      req.userInfo = { userId, userRole };

      return true;
    } catch (error) {
      throw new UnauthenticatedError("Authentication invalid.");
    }
  }),
]);

export const validateIdParam = validate([
  param("id")
    .custom((id) => mongoose.Types.ObjectId.isValid(id))
    .withMessage("Id is invalid"),
]);

// ==============================================
// Authentication routes
// ==============================================

export const validateRegisterInput = validate([
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Email is invalid")
    .bail()
    .custom(async (email) => {
      const isEmailUsed = await userModel.findOne({ email });
      if (isEmailUsed) throw new BadRequestError("Email already exists.");
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .bail()
    .isLength({ min: 10 })
    .withMessage("Password must be minimum 10 characters"),
]);

export const validateLoginInput = validate([
  body("email").notEmpty().withMessage("Email is required").bail().isEmail().withMessage("Email is invalid"),
  body("password").notEmpty().withMessage("Password is required"),
]);

// ==============================================
// Todo routes validation
// ==============================================

export const validateTodoInput = validate([
  body("title")
    .notEmpty()
    .withMessage("(from validateTodoInput) Please provide a title.")
    .isLength({ max: 50 })
    .withMessage("(from validateTodoInput) Please provide a title shorter than 50 characters."),
  body("description")
    .optional()
    .isLength({ max: 100 })
    .withMessage("(from validateTodoInput) Please provide a description shorter than 100 characters."),
  body("type")
    .optional()
    .isIn(Object.values(TODO_MODEL_TYPE))
    .withMessage("(from validateTodoInput) Type not supported."),
  body("importance")
    .optional()
    .isIn(Object.values(TODO_MODEL_IMPORTANCE))
    .withMessage("(from validateTodoInput) Importance level not supported."),
  body("deadline")
    .optional()
    .custom((deadline) => {
      if (!date.isValid(deadline, VALIDATION_DATE_FORMAT))
        throw new BadRequestError("(from validateTodoInput) Invalid deadline format.");
      return true;
    }),
  body("progress")
    .optional()
    .isIn(Object.values(TODO_MODEL_PROGRESS))
    .withMessage("(from validateTodoInput) Progress level not supported."),
]);

// ==============================================
// Admin routes validation
// ==============================================

export const validateAdminRole = validate([
  cookie("token").custom((_, { req }) => {
    if (req.userInfo.userRole !== "admin")
      throw new UnauthorizedError("(from validateAdminRole) Not authorized to access this route.");
    return true;
  }),
]);
