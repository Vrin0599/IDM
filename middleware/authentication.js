"use strict";

import { getUserDetails } from "../utils/helperFunction";

export default async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.send({ message: "authorisation token is required" });
    }
    const responseAuth = await getUserDetails(token);
    req.headers.userDetails = responseAuth.data.data;
    next();
  } catch (err) {
    res.send({ message: "invalid token" });
  }
};
