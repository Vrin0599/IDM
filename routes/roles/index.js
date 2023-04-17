const {
  getRolesController,
  createRolesController,
  updateRolesController,
  deleteRolesController,
} = require("../../controllers/roles");

const routers = require("express").Router();

routers.get("/", async (req, res) => {
  try {
    const response = await getRolesController();
    res.send({ data: response });
  } catch (err) {
    res.send(err);
  }
});

routers.post("/create", async (req, res) => {
  try {
    const response = await createRolesController(req.body);
    res.send({ data: response });
  } catch (err) {
    res.send(err);
  }
});

routers.post("/update", async (req, res) => {
  try {
    const response = await updateRolesController(req.body);
    res.send({ data: response });
  } catch (err) {
    res.send(err);
  }
});

routers.post("/delete", async (req, res) => {
  try {
    const response = await deleteRolesController(req.body);
    res.send({ data: response });
  } catch (err) {
    res.send(err);
  }
});
module.exports = routers;
