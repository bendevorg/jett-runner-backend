/**
 * @api {POST} /v1/score 
 * @apiName Insert Score
 * @apiGroup Leaderboard
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} name Player's name.
 * @apiParam {Number} score Player's score.
 * @apiParamExample {json} Request-example:
    {
      "name": "pintu",
      "score": 9
    }
 * @apiSuccess (200) {String} data Score data.
 * @apiSuccessExample {json} Success-Response:
    {
    "data": {
        "_id": "5ed9c4ee5ff52f38b4cd70d3",
        "name": "pintu",
        "score": 9,
        "__v": 0
    }
}
  *
*/
const insertDatabase = require('../../../utils/insertDatabase');
const constants = require('../../../utils/constants');

module.exports = async (req, res, next) => {
  const { score } = req.body;
  const { user } = req;
  const name = user.id;

  try {
    await insertDatabase(constants.tables.SCORES, { name, score });
  } catch (err) {
    return next(err);
  }
  return res.status(200).json({ message: constants.messages.info.SCORE_ADDED });
};
