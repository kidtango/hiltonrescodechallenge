const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema(
  {
    hotelName: String,
    arrivalDate: String,
    depatureDate: String,
    creator: { type: mongoose.Schema.ObjectId, ref: 'User' },
    guests: [{ type: mongoose.Schema.ObjectId, ref: 'Guest' }]
  },
  { timestamp: true }
);

module.exports = mongoose.model('Reservation', ReservationSchema);
