import { BOOKS_TYPES } from "../actions/bookingAction";

const initialState = {
  loading: false,
  bookings: [],
  
};

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case BOOKS_TYPES.GET_BOOKINGS:
      return {
        ...state,
       bookings: action.payload.bookings,
      };
    default:
      return state;
  }
};

export default bookingsReducer;
