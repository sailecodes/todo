import mongoose from "mongoose";
import date from "date-and-time";
import { body, param, validationResult } from "express-validator";

import userModel from "../models/userModel.js";
import { BadRequestError } from "../custom-errors/customErrors.js";
import { TODO_MODEL_IMPORTANCE, TODO_MODEL_PROGRESS, VALIDATION_DATE_FORMAT } from "../utils/constants.js";

const validate = (validationValues) => {
  return [
    validationValues,
    (req, _, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }

      next();
    },
  ];
};

// ============================================================================
// General validation
// ============================================================================

export const validateIdParam = validate([
  param("id")
    .custom((id) => mongoose.Types.ObjectId.isValid(id))
    .withMessage("(from validateIdParam) Please provide a valid MongoDB id in the query parameter."),
]);

// ============================================================================
// Authentication routes validation
// ============================================================================

export const validateRegisterInput = validate([
  body("firstName").notEmpty().withMessage("(from validateRegisterInput) Please provide a first name."),
  body("lastName").notEmpty().withMessage("(from validateRegisterInput) Please provide a last name."),
  body("email")
    .notEmpty()
    .withMessage("(from validateRegisterInput) Please provide an email.")
    .isEmail()
    .withMessage("(from validateRegisterInput) Please provide a valid email.")
    .custom(async (email) => {
      const userWithInputEmail = await userModel.findOne({ email });
      if (userWithInputEmail) throw new BadRequestError("(from validateRegisterInput) Email already exists.");
    }),
  body("password")
    .notEmpty()
    .withMessage("(from validateRegisterInput) Please provide a password.")
    .isLength({ min: 10 })
    .withMessage("(from validateRegisterInput) Please provide a password at least 10 characters long."),
]);

export const validateLoginInput = validate([
  body("email")
    .notEmpty()
    .withMessage("(from validateLoginInput) Please provide an email.")
    .isEmail()
    .withMessage("(from validateLoginInput) Please provide a valid email."),
  body("password").notEmpty().withMessage("(from validateLoginInput) Please provide a password."),
]);

// ============================================================================
// Todo routes validation
// ============================================================================

export const validateTodoInput = validate([
  body("title").notEmpty().withMessage("(from validateTodoInput) Please provide a title."),
  body("description")
    .optional()
    .isLength({ max: 100 })
    .withMessage("(from validateTodoInput) Please provide a description shorter than 100 characters."),
  body("importance")
    .optional()
    .isIn(Object.values(TODO_MODEL_IMPORTANCE))
    .withMessage("(from validateTodoInput) Importance level not supported."),
  body("deadline")
    .notEmpty()
    .withMessage("from validateTodoInput) Please provide a deadline.")
    .custom((deadline) => {
      return date.isValid(deadline, VALIDATION_DATE_FORMAT);
    }),
  body("progress")
    .optional()
    .isIn(Object.values(TODO_MODEL_PROGRESS))
    .withMessage("(from validateTodoInput) Progress level not supported."),
]);
