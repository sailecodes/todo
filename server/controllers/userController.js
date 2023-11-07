import { StatusCodes } from "http-status-codes";
import userModel from "../models/userModel.js";
import { NotFoundError } from "../custom-errors/customErrors.js";

export const getUser = async (req, res) => {
  const user = await userModel.findById(req.userInfo.userId).select("-_id -password -__v");

  if (!user) throw new NotFoundError(`No user with id ${req.userInfo.userId}`);

  res.status(StatusCodes.OK).json({ msg: "Retrieved user information.", data: user });
};
