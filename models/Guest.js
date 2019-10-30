const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('Guest', GuestSchema);
