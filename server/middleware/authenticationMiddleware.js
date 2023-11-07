import jwt from "jsonwebtoken";
import { UnauthenticatedError, UnauthorizedError } from "../custom-errors/customErrors.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) throw new UnauthenticatedError("Authentication invalid.");

  try {
    // Verifies the JWT and retrieves the payload embedded in the JWT
    const { userId, userRole } = jwt.verify(token, process.env.JWT_SECRET);

    // Creates a userInfo property in req.body for use in the restricted routes
    req.userInfo = { userId, userRole };

    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid.");
  }
};

export const verifyAdminRole = async (req, res, next) => {
  if (req.userInfo.userRole !== "admin") throw new UnauthorizedError("Not authorized to access this route.");
  next();
};
