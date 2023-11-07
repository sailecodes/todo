import { Router } from "express";

import { getApplicationStats } from "../controllers/adminController.js";
import { verifyAdminRole } from "../middleware/authenticationMiddleware.js";

const adminRouter = Router();

adminRouter.get("/application-stats", verifyAdminRole, getApplicationStats);

export default adminRouter;
