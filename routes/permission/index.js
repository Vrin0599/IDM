import express from "express";
import {
  getPermissionController,
  createPermissionController,
  updatePermissionController,
  deletePermissionController,
} from "../../controllers/permission";

const routers = express.Router();

routers.get("/", async (req, res, next) => {
  try {
    const response = await getPermissionController(req.headers);
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
    const response = await createPermissionController({
      ...req.body,
      ...req.user,
    });
    res.send({ data: response });
  } catch (err) {
    next({
      code: 500,
      message: err,
    });
  }
});

routers.post("/update", async (req, res, next) => {
  try {
    const response = await updatePermissionController(req.body);
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
    const response = await deletePermissionController(req.body);
    res.send({ data: response });
  } catch (err) {
    next({
      code: 500,
      message: err,
    });
  }
});

export default routers;
