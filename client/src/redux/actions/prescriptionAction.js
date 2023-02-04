import { GLOBALTYPES} from "./globalTypes";
import {
    postDataAPI,
    getDataAPI,
  } from "../../utils/fetchData";

  export const PRESCRIPTIONS_TYPES = {
    CREATE_PRESCRIPTION: "CREATE_PRESCRIPTION",
    GET_PRESCRIPTIONS: "GET_PRESCRIPTIONS",
  };

  export const CREATE_PRESCRIPTION = ({patientnamep, senderp, addressp, agep, diagnosisp, datep}) => async (dispatch) => {

    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  
      const res = await postDataAPI(
        "prescription", {patientnamep, senderp, addressp, agep, diagnosisp, datep}, );

        dispatch({
            type: PRESCRIPTIONS_TYPES.CREATE_PRESCRIPTION,
            payload: { ...res.data.newPrescription, user: auth.user , msg: "Submit Successfuly"},
 
          });
          dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
              success: res.data.msg,
            },
          });
    } catch (err) {

    }
  };

  export const getPrescriptions = (token) => async (dispatch) => {
    try {
      dispatch({ type: DISCOVER_TYPES.LOADING, payload: true });
  
      const res = await getDataAPI(`prescription`, token);
      dispatch({ type: PRESCRIPTIONS_TYPES.GET_PRESCRIPTIONS, payload: res.data });
  
      dispatch({ type: DISCOVER_TYPES.LOADING, payload: false });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {  },
      });
    }
};


