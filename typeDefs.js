const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    _id: ID
    name: String
    email: String
    picture: String
  }

  type Guest {
    _id: ID
    firstName: String
    lastName: String
  }

  type Reservation {
    _id: ID
    createdAt: String
    guests: [Guest]
    hotelName: String
    arrivalDate: String
    departureDate: String
    creator: User
  }

  input createReservationInput {
    hotelName: String
    departureDate: String
    arrivalDate: String
    guests: [ID]
  }

  input createGuestInput {
    firstName: String!
    lastName: String!
  }

  type Query {
    me: User
    getReservations: [Reservation]
    getReservation: Reservation
  }

  type Mutation {
    createReservation(input: createReservationInput!): Reservation
    deleteReservation(input: ID!): Reservation
    createGuest(input: createGuestInput!): Guest
  }
`;
