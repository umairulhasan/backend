const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: String,
  position: String,
  image: {
    type: String,
    required: false
  }

});

module.exports = mongoose.model('Staff', staffSchema);
