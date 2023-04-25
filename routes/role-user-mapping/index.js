import express from "express";
import { getRoleMappingController } from "../../controllers/role-user-mapping";

const routers = express.Router();

routers.post("/", async (req, res, next) => {
  try {
    const response = await getRoleMappingController({...req.body, ...req.headers});
    res.send({ data: response });
  } catch (err) {
    next({
      code: 500,
      message: err,
    });
  }
});

export default routers;
