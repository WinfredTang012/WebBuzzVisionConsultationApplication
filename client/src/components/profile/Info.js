import React, { useState, useEffect } from "react";
import Avatar from "../Avatar";
import EditProfile from "./EditProfile";
import Booking from "../../pages/booking";
import FollowBtn from "../FollowBtn";
import Followers from "./Followers";
import Following from "./Following";
import Table from 'react-bootstrap/Table';
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

const Info = ({ id, auth, profile, dispatch }) => {
  const [userData, setUserData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [onEdit, setOnEdit] = useState(false);
  const [onBooking, setOnBooking] = useState(false);

  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  useEffect(() => {
    if (id === auth.user._id) {
      setUserData([auth.user]);
    } else {
      const newData = profile.users.filter((user) => user._id === id);
      setUserData(newData);
    }
  }, [id, auth, dispatch, profile.users]);

  useEffect(() => {
    if (id === auth.user._id) {
      setBookingData([auth.user]);
    } 
  }, [id, auth, dispatch, profile.users]);



  useEffect(() => {
    if (showFollowers || showFollowing || onEdit ||onBooking) {
      dispatch({ type: GLOBALTYPES.MODAL, payload: true });
    } else {
      dispatch({ type: GLOBALTYPES.MODAL, payload: false });
    }
  }, [showFollowers, showFollowing, onEdit, onBooking,dispatch]);

  return (
    <div className="info">
      {userData.map((user) => (
        <div className="info_container" key={user._id}>
          <Avatar src={user.avatar} size="supper-avatar" />

          <div className="info_content">
            <div className="info_content_title">

            { user.position === 'doctor' ? (


              <h2>Dr. {user.fullname}</h2>

              ) : (
                <h2>{user.fullname}</h2>
                )
              }

              {user._id === auth.user._id ? (
                <button
                  className="btn btn-outline-info"
                  onClick={() => setOnEdit(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <>
                {auth.user.position === "doctor" ? (
   <FollowBtn user={user} />
              ) : (
                <>
                <FollowBtn user={user}/>
                <button
                className="btn btn-outline-info"
                id={id}
                onClick={() => setOnBooking(true)}
              >
                Booking
              </button>
              </>
              )}
             
              </>
              )}
            </div>
            

      {user.position === "patient" ? (
        <Table responsive="sm" >
        <tbody>
          <tr>
            <th>Full Name:</th>
            <td colSpan={8}> {user.fullname} </td>
          </tr>
          <tr>
            <th>Phone Number:</th>
            <td> {user.mobile} </td>
          </tr>
          <tr>
            <th>Location:</th>
            <td> {user.address} </td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Identity Card:</th>
            <td> {user.identitycard}</td>
          </tr>
          <tr>
            <th>Link:</th>
            <td> {user.website}</td>
          </tr>
        </tbody>
      </Table>
    ) : (
<Table responsive="sm" >
        <tbody>
          <tr>
            <th>Full Name:</th>
            <td colSpan={8}> {user.fullname} </td>
          </tr>
          <tr>
            <th>Education:</th>
            <td> {user.education} </td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td> {user.experience} </td>
          </tr>
          <tr>
            <th>Specialist:</th>
            <td>{user.specialist}</td>
          </tr>
          <tr>
            <th>Award:</th>
            <td> {user.story}</td>
          </tr>
        </tbody>
      </Table>
    )
}
          </div>

          {onEdit && <EditProfile setOnEdit={setOnEdit} />}
          {onBooking && <Booking setOnBooking={setOnBooking} />}

        </div>
      ))}
    </div>
  );
};

export default Info;
