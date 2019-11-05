export const CREATE_GUEST_MUTATION = `
  mutation($firstName: String!, $lastName: String!) {
    createGuest(input: 
      { 
        firstName: $firstName, 
        lastName: $lastName
      }) {
      _id
      firstName
      lastName
    }
  }
`;

export const CREATE_RESERVATION_MUTATION = `
  mutation($hotelName: String!, $arrivalDate: String!, $departureDate: String!, $guests:[ID!]) {
    createReservation(input: {arrivalDate: $arrivalDate , departureDate: $departureDate, hotelName: $hotelName, guests: $guests }) {
      guests {
        _id
        firstName
        lastName
      }
      arrivalDate
      departureDate
      hotelName
      createdAt
      _id
      creator {
        _id
        name
      }
    }
  }
`;
