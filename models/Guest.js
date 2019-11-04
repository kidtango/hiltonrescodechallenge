const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  reservation: { type: mongoose.Schema.ObjectId, ref: 'Reservation' }
});

module.exports = mongoose.model('Guest', GuestSchema);
