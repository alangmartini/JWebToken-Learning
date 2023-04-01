const boom = require('@hapi/boom');

function errorHandler(err, _req, res, _next) {
  const { output: { statusCode, payload } } = boom.isBoom(err) ? err : boom.boomify(err);

  res.status(statusCode).json({
    ...payload,
    message: err.message,
  });
}

module.exports = errorHandler;
