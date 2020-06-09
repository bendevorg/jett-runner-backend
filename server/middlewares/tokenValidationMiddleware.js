/**
 * Middleware to restrict calls with valid token
 * @module controllers/tokenValidationMiddleware
 *
 */

const rsaDecryptor = require('../utils/rsaDecryptor');
const validator = require('../utils/validator');
const constants = require('../utils/constants');
const { InvalidAuth } = require('../utils/errors');

/**
 * Check if token is valid
 *
 * @param {string} req.headers.cookies - User`s API Key
 * @return {callback} - Calls the API
 * @throws {json} - Throws a message with the error info
 */
module.exports = (req, res, next) => {
  if (!req.headers || !validator.isValidString(req.headers[constants.headers.authorization])) {
    return next(new InvalidAuth());
  }
  const tokenData = rsaDecryptor(
    req.headers[constants.headers.authorization],
    constants.cryptography.RSA_PRIVATE_KEY
  );
  if (!tokenData) {
    return next(new InvalidAuth());
  }
  const currentDate = Date.now() + constants.values.TIMEZONE_IN_MS;
  const tokenAge = currentDate - Date.parse(tokenData.date);
  if (tokenAge > constants.values.TOKEN_MAX_AGE_IN_MS) {
    return next(new InvalidAuth());
  }
  req.user = {
    anonymousData: tokenData
  };
  return next();
};