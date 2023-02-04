import { PRESCRIPTIONS_TYPES } from "../actions/prescriptionAction";

const initialState = {
  loading: false,
  prescriptions: [],
};

const prescriptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRESCRIPTIONS_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PRESCRIPTIONS_TYPES.GET_PRESCRIPTIONS:
      return {
        ...state,
       prescriptions: action.payload.prescriptions,
      };
    default:
      return state;
  }
};

export default prescriptionsReducer;
