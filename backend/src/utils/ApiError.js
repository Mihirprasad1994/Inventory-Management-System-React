class ApiError extends Error {
  statusCode = 500;
  constructor(statusCode, msg) {
    this.message = msg;
    this.statusCode = statusCode;
  }
}
module.exports = ApiError;
