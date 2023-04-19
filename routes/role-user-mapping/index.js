const {
    getRoleMappingController
  } = require("../../controllers/role-user-mapping");
  
  const routers = require("express").Router();
  
  routers.post("/", async (req, res) => {
    try {
      const response = await getRoleMappingController(req.body);
      res.send({ data: response });
    } catch (err) {
      res.send(err);
    }
  });
  
  module.exports = routers;
