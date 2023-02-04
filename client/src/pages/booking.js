import React, { useEffect, useState } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { CREATE_BOOKING } from "../redux/actions/bookingAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";

const Booking = ({ user,setOnBooking }) => {
  const animatedComponents = makeAnimated();
  const { scroll } = useSelector((state) => state);
  const dispatch = useDispatch();
  const {  alert } = useSelector((state) => state);
  const { theme ,auth} = useSelector((state) => state);

  const history = useHistory();

  const initialState ={
    patientname: '',
    emailp: '',
    age:'',
    phone:'',
    date:'',
    time:'',
    description:'',
    sender:'',
    doctorname: '',
    type: '',
    status:'',
    prescription:'',
    location:'',

}  


const [bookingData, setBookingData] = useState(initialState);
const {patientname, emailp, age, phone, date, time, description, sender,doctorname, type, status,prescription,location} = bookingData;


useEffect(() => {
  setBookingData(auth.user);
}, [auth.user]);


const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };
const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CREATE_BOOKING(bookingData, auth.user));
  };

const nostify = () => {
    toast.info('Booking Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 100);
  }, []);

  const addBookingDetails = () => {

    if ((patientname).valueOf().trim() === ""){
      swal({
        text: "Booked UnSuccessfully!",
        icon: "error",
      })
    } else {
      swal({
        text: "Booked Successfully!",
        icon: "success",
      });
      
    }

  };

  return (
  
    <div className="edit_profile">
    <button
      className="btn btn-danger btn_close"
      onClick={() => setOnBooking(false)}
    >
      Close
    </button>
  

            <form onSubmit={handleSubmit}>
            <div className="heading-common">
                <h1><strong>Book Appointment</strong>
                </h1>  
            </div>
            <div className="form-group"></div>
                <div className="form-group">
                <select 
                   value={bookingData.sender}
                    className="form-control"
                    name="sender"
                    onChange={handleChangeInput}
                 
                    >
                      <option>Select Patient Name</option>
                      <option value={auth.user._id}>
                      {auth.user.fullname}
            </option>
            </select>
                </div>
                
                <div className="form-group">
                <select 
                   value={bookingData.doctorname}
                    className="form-control"
                    name="doctorname"
                    onChange={handleChangeInput}
                    
                    >
                      <option>Select Doctor Name</option>
                      <option value='william'>
                      Dr.William
            </option>
            <option value='reckless'>
                      Dr.Reckless
            </option>
            <option value='rebert'>
                      Dr.Rebert
            </option>
            <option value='thomas'>
                      Dr.Thomas
            </option>
            <option value='susan'>
                      Dr.Susan
            </option>

            </select>
                </div>
         
                <div className="form-group">
          
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Patient name"
                    name="patientname"
                    value={patientname}
                    onChange={handleChangeInput}
                   required
                    />
                </div>
                <div className="form-group">
               
                <input
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Email"
                    name="emailp" 
                    value={emailp} 
                   required
                    onChange={handleChangeInput}/>
                </div>                    
                <div className="form-group">
               
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Age"
                        name="age" 
                        value={age} 
                     
                        onChange={handleChangeInput}/>
                </div>
                <div className="form-group">
              
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Phone Number"
                        name="phone" 
                        value={phone} 
                        
                        onChange={handleChangeInput} />
                      
                    </div>
                    <div className="form-group">
              
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter Address"
                  name="location" 
                  value={location} 
              
                  onChange={handleChangeInput} />
                
              </div>
                    <div className="form-group">
               
                    <select value={bookingData.type} name='type'  className="form-control"   onChange={(handleChangeInput)}
                  >
            <option>Select Type of Booking</option>
            <option value='Phone Call' >
              Phone Call
            </option>
            <option value='Video Call'>
              Video Call
            </option>
            <option value='Chat' >
              Chat
            </option>
          </select>
             </div>
                <div className="form-group">
                
                    <input 
                        type="date" 
                        placeholder="Enter Appointment Date" 
                        className="form-control" 
                        name="date" 
                        value={date}
                        onChange={handleChangeInput} />
                </div>
                <div className="form-group">
               
                    <input 
                        type="time" 
                        placeholder="Enter Appointment Time" 
                        className="form-control" 
                        name="time" 
                        value={time}
                        onChange={handleChangeInput} />
                </div>
                <div className="form-group">
              
                    <textarea 
                        className="form-control" 
                        placeholder="Enter Reason of Booking (Health Description)" 
                        name="description" 
                        value={description}
                        onChange={handleChangeInput}
                        ></textarea>
                   
                </div>
                <button    type="submit" onClick={addBookingDetails} className="btn btn-dark w-100">
          Booking
        </button>

            </form>
            <>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
</>               
          </div>
  );
};

export default Booking;