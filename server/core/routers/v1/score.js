const express = require('express');
const retrieveControllers = require('../../../utils/retrieveControllers');
const constants = require('../../../utils/constants');

const router = express.Router();

const controllers = retrieveControllers(
  __filename.split(/\\routers|\/routers/)[1].split('.')[0]
);

router.get(
  constants.endpoints.SCORE,
  controllers.retrieveScore
);

module.exports = router;
