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
    depatureDate: String
  }

  type Query {
    me: User
  }
`;
