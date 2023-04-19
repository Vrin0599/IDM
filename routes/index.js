const routers = require("express").Router();
const auth = require("../middleware/authentication");

const permissionRouter = require("./permission");
const roleRouter = require("./roles");
const userRouter = require("./users");
const roleUserMappingRouter = require("./role-user-mapping");

routers.use("/permission", auth, permissionRouter);
routers.use("/role", auth, roleRouter);
routers.use("/users", auth, userRouter);
routers.use("/role_user_mappings", auth, roleUserMappingRouter);

module.exports = routers;
