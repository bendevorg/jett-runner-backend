const constants = require('./constants');

class NotFound extends Error {
  constructor(...args) {
    super(...args);
    this.name = constants.error.name.NOT_FOUND;
    Error.captureStackTrace(this, NotFound);
  }
}

class InvalidAuth extends Error {
  constructor(...args) {
    super(...args);
    this.name = constants.error.name.INVALID_AUTH;
    Error.captureStackTrace(this, InvalidAuth);
  }
}

module.exports = {
  NotFound,
  InvalidAuth,
};