const express = require('express');
const constants = require('../../../utils/constants');
const retrieveControllers = require('../../../utils/retrieveControllers');

const router = express.Router();

const controllers = retrieveControllers(
  __filename.split(/\\routers|\/routers/)[1].split('.')[0]
);

router.get(
  constants.endpoints.RETRIEVE_LEADERBOARD,
  controllers.retrieveLeaderboard,
);

module.exports = router;
