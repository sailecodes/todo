import { Router } from "express";

import { getApplicationStats } from "../controllers/adminController.js";
import { validateAdminRole } from "../middleware/validationMiddleware.js";

const adminRouter = Router();

adminRouter.get("/application-stats", validateAdminRole, getApplicationStats);

export default adminRouter;
