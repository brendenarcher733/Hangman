const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  win: Boolean,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Result', resultSchema);
