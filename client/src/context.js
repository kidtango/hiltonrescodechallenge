import { createContext } from 'react';

const Context = createContext({
  currentUser: null,
  isAuth: false,
  arrivalDate: null,
  departureDate: null,
  guests: [],
  hotelName: null,
  reservations: []
});

export default Context;
