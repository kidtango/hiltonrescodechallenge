export const ME_QUERY = `
{
  me {
    _id
    name
    email
    picture
  }
}
`;

export const GET_RESERVATIONS_QUERY = `
{
  getReservations {
    _id
    createdAt
    arrivalDate
    departureDate
    creator {
      _id
      name
    }
    hotelName
    guests {
      _id
      firstName
      lastName
    }
  }
}
`;
