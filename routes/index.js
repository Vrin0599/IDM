const routers = require("express").Router();

const permissionRouter = require("./permission");
const roleRouter = require("./roles");

routers.use("/permission", permissionRouter);
routers.use("/role", roleRouter);

module.exports = routers;
