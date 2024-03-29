/**
 * Module to handle errors
 * @module middlewares/errorMiddleware
 */

/**
 * Handle all errors in our app. Must call next(err) on a controller to be used
 *
*/

const constants = require('../utils/constants');
// eslint-disable-next-line
module.exports = (err, req, res, next) => {
  switch(err.name) {
    case (constants.error.name.VALIDATION_ERROR):
      return res.status(400).json({
        data: err.details[0].message,
      });
    case (constants.error.name.DOCUMENT_NOT_FOUND_ERROR):
      return res.status(404).json({
        data: constants.messages.error.NOT_FOUND,
      });
    case (constants.error.name.INVALID_AUTH):
      return res.status(401).json({
        data: constants.messages.error.INVALID_AUTH,
      });
    default:
      return res.status(500).json({
        data: constants.messages.error.UNEXPECTED_RUNNING,
      });
  }
};