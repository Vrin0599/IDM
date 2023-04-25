import express from "express";
import {
  getRepoController,
  createRepoController,
} from "../../controllers/repository";

const routers = express.Router();

routers.post("/create", async (req, res, next) => {
  try {
    const response = await createRepoController({...req.body, ...req.headers});
    res.send({ data: response, message: "repository created successfully" });
  } catch (err) {
    next({
      code: 500,
      message: err,
    });  }
});

routers.get("/", async (req, res, next) => {
  try {
    const response = await getRepoController(req.headers);
    res.send({ data: response });
  } catch (err) {
    next({
      code: 500,
      message: err,
    });  }
});

export default routers;
