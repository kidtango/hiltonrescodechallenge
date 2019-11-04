const { AuthenticationError } = require('apollo-server');
const Guest = require('./models/Guest');
const Reservation = require('./models/Reservation');

const authenticated = next => (root, args, ctx, info) => {
  if (!ctx.currentUser) {
    throw new AuthenticationError('You must be logged in');
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    me: authenticated((root, args, ctx) => ctx.currentUser)
  },
  Mutation: {
    createGuest: authenticated(async (root, { input }, ctx) => {
      const newGuest = await new Guest({
        firstName: input.firstName,
        lastName: input.lastName
      }).save();
      return newGuest;
    }),
    createReservation: authenticated(async (root, { input }, ctx) => {
      console.log('TCL: ctx', ctx.currentUser._id);
      console.log('TCL: input', input.guests[0]);

      const newReservation = await new Reservation({
        hotelName: input.hotelName,
        arrivalDate: input.arrivalDate,
        departureDate: input.departureDate,
        creator: ctx.currentUser._id,
        guests: input.guests
      }).save();

      let reservationAdded = await Reservation.populate(
        newReservation,
        'creator'
      );

      reservationAdded = await Reservation.populate(newReservation, 'guests');

      return reservationAdded;

      //retrieve all guests
      // create new reservation & add guests to it
    })
  }
};
