require("dotenv").config();

const express = require("express");

import routes from "./routes";

const PORT = process.env.PORT;

const DB = require("./models/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}, you can proceed...`);
});
