import React from "react";
import LeftSide from "../../components/message/LeftSide";
import logo from "../../images/logo.png"
import { useSelector, useDispatch } from "react-redux";

const Message = () => {

  const { homePosts, scroll ,auth, suggestions} = useSelector((state) => state);
  const {  theme } = useSelector((state) => state);

  return (
    <>
    <div className="status my-3 d-flex">
    <h4> Chat</h4>
    </div>
    <div className="message d-flex">
      <div className="col-md-4 border-right px-0">
        <LeftSide />
      </div>

      <div className="col-md-8 px-0 right_mess">
        <div
          className="d-flex justify-content-center 
                align-items-center flex-column h-100"
        >
          <img style={{ width: 300, height: 300 , filter: theme ? "invert(1)" : "invert(0)" }} src={logo} alt="horse" />
          
          <h4>Your Health Is Our Priority</h4>
        </div>
      </div>
    </div>
    </>
  );
};

export default Message;
