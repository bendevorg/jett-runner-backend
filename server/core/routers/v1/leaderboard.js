const express = require('express');
const constants = require('../../../utils/constants');
const retrieveControllers = require('../../../utils/retrieveControllers');
const retrieveSchemas = require('../../../utils/retrieveSchemas');

const router = express.Router();

const controllers = retrieveControllers(
  __filename.split(/\\routers|\/routers/)[1].split('.')[0]
);
const schemas = retrieveSchemas(__filename.split(/\\routers|\/routers/)[1].split('.')[0]);

router.post(
  constants.endpoints.LEADER_BOARD,
  schemas.addLeaderBoard,
  controllers.addScore
);

module.exports = router;
