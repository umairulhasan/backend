const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  guests: { type: Number, required: true },
  beds: { type: Number, required: true },
  baths: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String } // optional
});

module.exports = mongoose.model('Hotel', hotelSchema);
