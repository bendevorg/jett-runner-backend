/**
 * Middleware to get user info
 * @module controllers/userMiddleware
 *
 */

const findDatabase = require('../utils/findDatabase');
const insertDatabase = require('../utils/insertDatabase');
const validator = require('../utils/validator');
const constants = require('../utils/constants');
const { InvalidAuth } = require('../utils/errors');

/**
 * Get user data
 *
 * @param {string} req.user.id - User`s ID
 * @return {callback} - Calls the API
 * @throws {json} - Throws a message with the error info
 */
module.exports = async (req, res, next) => {
  if (!req.user || !validator.isValidString(req.user.id)) {
    return next();
  }
  const _id = req.user.id;
  let userData;
  try {
    userData = await findDatabase(constants.tables.USERS, { _id })
  } catch (err) {
    if (err.name !== constants.error.name.DOCUMENT_NOT_FOUND_ERROR) {
      return next(err);
    }
  }
  if (!userData) {
    try {
      userData = await insertDatabase(constants.tables.USERS, { _id });
    } catch (err) {
      return next(err);
    }
  }
  req.user.data = userData;
  return next();
};