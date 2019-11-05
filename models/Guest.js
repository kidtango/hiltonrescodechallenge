const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  createdAt: { type: Date, default: Date.now },
  reservation: { type: mongoose.Schema.ObjectId, ref: 'Reservation' }
});

module.exports = mongoose.model('Guest', GuestSchema);
