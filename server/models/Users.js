module.exports = mongoose => {
  return new mongoose.Schema({
    _id: {
      type: String,
      required: true,
    },
    highscore: {
      type: Number,
      required: false,
      default: 0,
    },
  });
};
