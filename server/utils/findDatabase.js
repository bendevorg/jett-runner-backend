const database = require('../models/database');

module.exports = (
  table,
  filter = {},
  select = [],
  offset = 0,
  limit,
  sort,
  lean = true
) => {
  return new Promise((resolve, reject) => {
    return database[table]
      .find(filter)
      .select(select)
      .orFail()
      .skip(Number.isNaN(offset) ? 0 : Number(offset))
      .limit(Number.isNaN(limit) ? 0 : Number(limit))
      .sort(sort)
      .lean(lean)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
};
