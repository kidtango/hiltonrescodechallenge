const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema(
  {
    hotelName: String,
    arrivalDate: String,
    depatureDate: String,
    guests: [
      {
        guest: { type: mongoose.SchemaObjectId, ref: 'Guest' }
      }
    ]
  },
  { timestamp: true }
);

module.exports = mongoose.model('Reservation', ReservationSchema);
