const express = require('express');
const constants = require('../../../utils/constants');
const retrieveControllers = require('../../../utils/retrieveControllers');
const retrieveSchemas = require('../../../utils/retrieveSchemas');

const router = express.Router();

const controllers = retrieveControllers(
  __filename.split(/\\routers|\/routers/)[1].split('.')[0]
);
const schemas = retrieveSchemas(__filename.split(/\\routers|\/routers/)[1].split('.')[0]);

router.get(
  constants.endpoints.SCORES,
  controllers.retrieveLeaderboard,
);
console.log('--2')
router.post(
  constants.endpoints.SCORES,
  schemas.addScore,
  controllers.addScore
);
console.log('--4')

module.exports = router;
