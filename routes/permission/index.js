const {
  getPermissionController,
  createPermissionController,
  updatePermissionController,
  deletePermissionController,
} = require("../../controllers/permission");

const routers = require("express").Router();

routers.get("/", async (req, res) => {
  try {
    console.log(req.user)
    const response = await getPermissionController();
    res.send({ data: response });
  } catch (err) {
    res.send(err);
  }
});

routers.post("/create", async (req, res) => {
  try {
    const response = await createPermissionController({...req.body,...req.user});
    res.send({ data: response });
  } catch (err) {
    res.send(err);
  }
});

routers.post("/update", async (req, res) => {
  try {
    const response = await updatePermissionController(req.body);
    res.send({ data: response });
  } catch (err) {
    res.send(err);
  }
});

routers.post("/delete", async (req, res) => {
  try {
    const response = await deletePermissionController(req.body);
    res.send({ data: response });
  } catch (err) {
    res.send(err);
  }
});

module.exports = routers;
