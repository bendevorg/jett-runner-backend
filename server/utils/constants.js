module.exports = {
  endpoints: {
    LEADERBOARD: '/',
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
  // TODO: ver se funfa "Leaderboards" num db novo lol (possibly a crash here)
  tables: {
    LEADERBOARD: 'Leaderboards',
  }
};
