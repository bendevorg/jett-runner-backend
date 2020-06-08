module.exports = {
  endpoints: {
    RETRIEVE_LEADERBOARD: '/',
    ADD_SCORE: '/score',
  },
  error: {
    name: {
      VALIDATION_ERROR: 'ValidationError',
    },
  },
  messages: {
    error: {
      UNEXPECTED_RUNNING: 'An unexpected error occurred while processing your request.',
    },
  },
  tables: {
    SCORES: 'Scores',
  }
};
