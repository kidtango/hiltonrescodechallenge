const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema(
  {
    hotelName: String,
    arrivalDate: Date,
    departureDate: Date,
    createdAt: { type: Date, default: Date.now },
    creator: { type: mongoose.Schema.ObjectId, ref: 'User' },
    guests: [{ type: mongoose.Schema.ObjectId, ref: 'Guest' }]
  },
  { timestamp: true }
);

module.exports = mongoose.model('Reservation', ReservationSchema);
