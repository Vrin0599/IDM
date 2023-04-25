import express from "express";
import {
  getUsersController,
  createUsersController,
} from "../../controllers/users";

const routers = express.Router();

routers.post("/create", async (req, res, next) => {
  try {
    const response = await createUsersController({...req.body, ...req.headers});
    res.send({ data: response, message: "user created successfully" });
  } catch (err) {
    next({
      code: 500,
      message: err,
    });
  }
});

routers.get("/", async (req, res, next) => {
  try {
    const response = await getUsersController(req.headers);
    res.send({ data: response });
  } catch (err) {
   next({
      code: 500,
      message: err,
    }); 
  }
});

export default routers;
