import React from "react";
import Avatar from "../Avatar";
import { useSelector, useDispatch } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

const Status = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
    { auth.user.position === 'patient' ? (
    <div className="status my-3 d-flex">
        <h4> Forum</h4> &nbsp;&nbsp;
      <button
        className="statusBtn flex-fill"
        onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
      >
        {auth.user.fullname}, Is there any problem?
      </button>
    </div>
      ) : (

       <div className="status my-3 d-flex">
        <h4> Forum</h4> &nbsp;&nbsp;
      <button
        className="statusBtn flex-fill"
      >
        Dr.{auth.user.fullname}, Thank You For Your Kindness
      </button>
     
    </div>
  
        )
      }
      </>
  );
};

export default Status;
