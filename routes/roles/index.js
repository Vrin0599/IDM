import express from "express";
import {
  getRolesController,
  createRolesController,
  updateRolesController,
  deleteRolesController,
} from "../../controllers/roles";

const routers = express.Router();

routers.get("/", async (req, res, next) => {
  try {
    const response = await getRolesController(req.headers);
    res.send({ data: response });
  } catch (err) {
    next({
      code: 500,
      message: err,
    });
  }
});

routers.post("/create", async (req, res, next) => {
  try {
    const response = await createRolesController({
      ...req.body,
      ...req.headers,
    });
    res.send({ data: response, message: "roles created successfully" });
  } catch (err) {
    next({
      code: 500,
      message: err,
    });
  }
});

routers.post("/update", async (req, res, next) => {
  try {
    const response = await updateRolesController(req.body);
    res.send({ data: response });
  } catch (err) {
    next({
      code: 500,
      message: err,
    });
  }
});

routers.post("/delete", async (req, res, next) => {
  try {
    const response = await deleteRolesController(req.body);
    res.send({ data: response });
  } catch (err) {
    next({
      code: 500,
      message: err,
    });
  }
});

export default routers;
