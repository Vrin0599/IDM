const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  let statusCode = error?.code || 500;

  res.status(statusCode).json({ type: "error", error, errCode: error.errCode });
};

export default errorHandler;
