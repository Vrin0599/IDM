const {
    getUsersController,
    createUsersController
  } = require("../../controllers/users");
  
  const routers = require("express").Router();
  
  routers.get("/", async (req, res) => {
    try {
      const response = await getUsersController();
      res.send({ data: response });
    } catch (err) {
      res.send(err);
    }
  });
  
  routers.post("/create", async (req, res) => {
    try {
      const response = await createUsersController(req.body);
      res.send({ data: response });
    } catch (err) {
      res.send(err);
    }
  });

  module.exports = routers;
