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
      const existingGuests = state.guests;
      const newGuest = payload.createGuest;
      return { ...state, guests: [...existingGuests, newGuest] };
    case 'REMOVE_GUEST':
      const removedGuestId = payload;
      console.log('TCL: reducer -> payload', payload);
      const updatedGuests = state.guests.filter(
        guest => guest._id !== removedGuestId
      );
      return { ...state, guests: [...updatedGuests] };
    case 'OPEN_SNACKBAR':
      return { ...state, isSnackbarOpen: true };
    case 'CLOSE_SNACKBAR':
      return { ...state, isSnackbarOpen: false };
    case 'ADD_RESERVATIONS':
      return { ...state, reservations: payload };

    default:
      return state;
  }
}
