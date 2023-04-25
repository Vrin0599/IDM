const routers = require("express").Router();
import auth from "../middleware/authentication";

import permissionRouter from "./permission";
import roleRouter from "./roles";
import userRouter from "./users";
import roleUserMappingRouter from "./role-user-mapping";

routers.use("/permission", auth, permissionRouter);
routers.use("/role", auth, roleRouter);
routers.use("/users", auth, userRouter);
routers.use("/role_user_mappings", auth, roleUserMappingRouter);

export default routers;
