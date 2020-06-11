module.exports = {
  endpoints: {
    RETRIEVE_LEADERBOARD: '/',
    USER_INFO: '/',
    ADD_SCORE: '/score',
  },
  error: {
    name: {
      VALIDATION_ERROR: 'ValidationError',
      NOT_FOUND: 'NotFoundError',
      INVALID_AUTH: 'InvalidAuthError',
      DOCUMENT_NOT_FOUND_ERROR: 'DocumentNotFoundError',
    },
  },
  messages: {
    error: {
      INVALID_AUTH: 'Invalid authentication',
      NOT_FOUND: 'Data not found',
      UNEXPECTED_RUNNING: 'An unexpected error occurred while processing your request.',
    },
    info: {
      SCORE_ADDED: 'New score added',
    },
  },
  tables: {
    USERS: 'Users',
  },
  values: {
    MAXIMUM_LEADERBOARD_SCORES: 50,
    TIMEZONE_IN_MS: (new Date()).getTimezoneOffset() * 60 * 1000,
    TOKEN_MAX_AGE_IN_MS: 5 * 60 * 1000,
    SENSITIVE_FIELDS: ['_id']
  },
  selects: {
    USER_DATA: ['_id', 'highscore'],
    LEADERBOARD_DATA: ['highscore', '-_id'],
  },
  headers: {
    authorization: 'x-authorization-key',
  },
  cryptography: {
    RSA_PRIVATE_KEY: process.env.RSA_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
};
