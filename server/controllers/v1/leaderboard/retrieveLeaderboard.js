/**
 * @api {GET} /v1/leaderboard List Top Scores
 * @apiName List Top Scores
 * @apiGroup Leaderboard
 * @apiVersion 1.0.0
 * 
 * @apiSuccess (200) {String} data score data.
 * @apiSuccessExample {json} Success-Response:
  {
    "leaderboard": [
      {
        "_id": "5eddba336d073d2c98b8b4cf",
        "name": "corona-chan",
        "score": 1000000,
        "__v": 0
      },
      {
        "_id": "5edd7cefe34452363835516d",
        "name": "ta funfando ainda sera",
        "score": 9090,
        "__v": 0
      },
    ]
  }
 */
const findDatabase = require('../../../utils/findDatabase');
const constants = require('../../../utils/constants');

module.exports = async (req, res, next) => {
  const filters = {};
  const sort = { highscore: -1 };
  const select = ['highscore', '-_id'];
  let leaderboard;
  try {
    leaderboard = await findDatabase(
      constants.tables.USERS,
      filters,
      select,
      0,
      constants.MAXIMUM_LEADERBOARD_SCORES,
      sort,
    );
  } catch (err) {
    return next(err);
  };
  return res.status(200).json({
    leaderboard,
  });
};
