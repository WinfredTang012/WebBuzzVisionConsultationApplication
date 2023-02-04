import { GLOBALTYPES} from "./globalTypes";
import {
    postDataAPI,
    getDataAPI,
    patchDataAPI,
  } from "../../utils/fetchData";

  export const BOOKS_TYPES = {
    CREATE_BOOKING: "CREATE_BOOKING",
    GET_BOOKINGS: "GET_BOOKINGS",


  };

export const CREATE_BOOKING = ({patientname, emailp, age, phone, date, description,auth,sender,doctorname, type, time, status,location}) => async (dispatch) => {

    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  
      const res = await postDataAPI(
        "booking", {patientname, emailp, age, phone, date, description,sender,doctorname, type, time, status,location},
       
        );

        dispatch({
            type: BOOKING_TYPES.CREATE_BOOKING,
            payload: { ...res.data.newBooking, user: auth.user , msg: "Booking Successfuly"},
 
          });
          dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
              success: res.data.msg,
            },
          });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };

    export const getBookings = (token) => async (dispatch) => {
      try {
        dispatch({ type: DISCOVER_TYPES.LOADING, payload: true });
    
        const res = await getDataAPI(`booking`, token);
        dispatch({ type: DISCOVER_TYPES.GET_BOOKING, payload: res.data });
    
        dispatch({ type: DISCOVER_TYPES.LOADING, payload: false });
      } catch (err) {
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: {  },
        });
      }
};



    