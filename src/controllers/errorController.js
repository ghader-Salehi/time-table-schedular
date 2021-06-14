const developerEnv = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = (err, req, res, next) => {
  const environment = process.env.ENVIRONMENT;
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (environment === 'development') {
    developerEnv(err, res);
  } else if (environment === 'production') {
    // TODO: error handling on production mode
  }
};
