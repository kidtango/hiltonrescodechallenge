export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'LOGIN_USER':
      return {
        ...state,
        currentUser: payload
      };
    case 'IS_LOGGED_IN':
      return { ...state, isAuth: payload };

    case 'SIGNOUT_USER':
      return { ...state, isAuth: false, currentUser: null };

    case 'PICK_ARRIVAL_DATE':
      return { ...state, arrivalDate: payload };

    case 'PICK_DEPARTURE_DATE':
      return { ...state, departureDate: payload };

    case 'SELECT_HOTEL':
      return { ...state, hotelName: payload };
    case 'ADD_GUEST':
      // const newGuest = payload;
      const existingGuests = state.guests;
      const newGuest = payload;
      return { ...state, guests: [...existingGuests, newGuest] };
    default:
      return state;
  }
}
