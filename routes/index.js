import { Router } from "express";
import auth from "../middleware/authentication";

import permissionRouter from "./permission";
import roleRouter from "./roles";
import userRouter from "./users";
import roleUserMappingRouter from "./role-user-mapping";
import repositoryRouter from "./repository";

const router = Router();

router.use("/permission", auth, permissionRouter);
router.use("/role", auth, roleRouter);
router.use("/users", auth, userRouter);
router.use("/role_user_mappings", auth, roleUserMappingRouter);
router.use("/repository", auth, repositoryRouter);

export default router;
