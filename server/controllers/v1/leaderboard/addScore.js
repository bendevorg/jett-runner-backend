/**
 * @api {POST} /v1/leaderboard 
 * @apiName Insert Score
 * @apiGroup Leader Board
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
  const { name, score } = req.body;
  let newScore;

  try {
    newScore = await insertDatabase(constants.tables.LEADERBOARD, {name, score});
  } catch (err) {
    return next(err);
  }
  return res.status(200).json({ data: newScore });
};
