"use strict";

module.exports = (req, res, next) => {
  req.user = {
    user_id: req.header("x-auth-user-id"),
  };
  next();
};
