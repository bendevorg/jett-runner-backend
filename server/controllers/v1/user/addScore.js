/**
 * @api {POST} /v1/user/score 
 * @apiName Insert Score
 * @apiGroup User
 * @apiVersion 1.0.0
 * 
 * @apiParam {Number} score Player's score.
 * @apiParamExample {json} Request-example:
    {
      "score": 9
    }
 * @apiSuccess (200) {String} data Score data.
 * @apiSuccessExample {json} Success-Response:
    {
      "message": "Score added"
    }
}
  *
*/
const updateDatabase = require('../../../utils/updateDatabase');
const constants = require('../../../utils/constants');

module.exports = async (req, res, next) => {
  const { score } = req.body;
  const { user } = req;
  if (score > user.data.highscore) {
    try {
      await updateDatabase(constants.tables.USERS, user.id, { highscore: score });
    } catch (err) {
      return next(err);
    }
  }
  return res.status(200).json({ message: constants.messages.info.SCORE_ADDED });
};
