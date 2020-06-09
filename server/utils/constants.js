module.exports = {
  endpoints: {
    RETRIEVE_LEADERBOARD: '/',
    ADD_SCORE: '/score',
  },
  error: {
    name: {
      VALIDATION_ERROR: 'ValidationError',
      NOT_FOUND: 'NotFoundError',
      INVALID_AUTH: 'InvalidAuthError',
    },
  },
  messages: {
    error: {
      INVALID_AUTH: 'Invalid authentication',
      UNEXPECTED_RUNNING: 'An unexpected error occurred while processing your request.',
    },
  },
  tables: {
    SCORES: 'Scores',
  },
  values: {
    MAXIMUM_LEADERBOARD_SCORES: 50,
    TIMEZONE_IN_MS: (new Date()).getTimezoneOffset() * 60 * 1000,
    TOKEN_MAX_AGE_IN_MS: 5 * 60 * 1000,
  },
  headers: {
    authorization: 'x-authorization-key',
  },
  cryptography: {
    RSA_PRIVATE_KEY: process.env.RSA_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
};
