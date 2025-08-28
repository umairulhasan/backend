const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  type: String,
  room: String,
  checkIn: Date,
  checkOut: Date,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
