module.exports = mongoose => {
  return new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  });
};
