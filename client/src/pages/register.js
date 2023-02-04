
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { register } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register=() => {
    const GridStyle={backgroundColor:' #C6EFF9'}
    const paperStyle={padding: 50, width: 340, margin:"0 auto", backgroundColor:' #C6EFF9'}

  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = {
    fullname: "",
    email: "",
    password: "",
    cf_password: "",
    position: "patient",
  };
  const [userData, setUserData] = useState(initialState);
  const { fullname,  email, password, cf_password, position} = userData;

  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  useEffect(() => {
    if (auth.token) history.push("/");
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));

  };
    
  const nostify = () => {
    toast.info('Error, Please Refresh The Page', {
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
    return(
        <Grid  style={GridStyle}>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                    <h2>Register</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Web-Buzz</h3>

        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            onChange={handleChangeInput}
            value={fullname.toUpperCase()}
            style={{ background: `${alert.fullname ? "#fd2d6a14" : ""}` }}
          />
<small>**Unalterable**</small>
          <small className="form-text text-danger">
            {alert.fullname ? alert.fullname : ""}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            onChange={handleChangeInput}
            value={email}
            style={{ background: `${alert.email ? "#fd2d6a14" : ""}` }}
          />

          <small className="form-text text-danger">
            {alert.email ? alert.email : ""}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>

          <div className="pass">
            <input
              type={typePass ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChangeInput}
              value={password}
              name="password"
              style={{ background: `${alert.password ? "#fd2d6a14" : ""}` }}
            />

            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? "Hide" : "Show"}
            </small>
          </div>

          <small className="form-text text-danger">
            {alert.password ? alert.password : ""}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="cf_password">Confirm Password</label>

          <div className="pass">
            <input
              type={typeCfPass ? "text" : "password"}
              className="form-control"
              id="cf_password"
              onChange={handleChangeInput}
              value={cf_password}
              name="cf_password"
              style={{ background: `${alert.cf_password ? "#fd2d6a14" : ""}` }}
            />

            <small onClick={() => setTypeCfPass(!typeCfPass)}>
              {typeCfPass ? "Hide" : "Show"}
            </small>
          </div>

          <small className="form-text text-danger">
            {alert.cf_password ? alert.cf_password : ""}
          </small>
        </div>

        <div className="row justify-content-between mx-0 mb-1">

          <label htmlFor="patient">
           Patient:{" "}
            <input
              type="radio"
              id="patient"
              name="position"
              value="patient"
              defaultChecked
              onChange={handleChangeInput}
            />
          </label>
        </div>

        <button onClick={nostify} type="submit"   className="btn btn-dark w-100">
          Register
        </button>
      </form>
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
            </Paper>
           
        </Grid>
    )
}

export default Register;