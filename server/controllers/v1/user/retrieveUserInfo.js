/**
 * @api {GET} /v1/user Get user info
 * @apiName Retrieve user info
 * @apiGroup User
 * @apiVersion 1.0.0
 * 
 * @apiSuccess (200) {String} data score data.
 * @apiSuccessExample {json} Success-Response:
  {
    "highscore": 10,
  }
 */

module.exports = async (req, res, next) => {
  const { data } = req.user;
  delete data._id;
  return res.status(200).json({
    ...data,
  });
};
