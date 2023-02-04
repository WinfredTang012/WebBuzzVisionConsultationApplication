
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Doctor=() => {
    const GridStyle={backgroundColor:' #C6EFF9'}
    const paperStyle={padding:50,width:340,  backgroundColor:' #C6EFF9'}

    const initialState = { email: "", password: "" , position: "" };
    const [userData, setUserData] = useState(initialState);
    const { email, password, position } = userData;
  
    const [typePass, setTypePass] = useState(false);
  
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useHistory();
  
    useEffect(() => {
      if (auth.token) history.push("/");
    }, [auth.token, history]);
  
    const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(userData));
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
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={handleSubmit} >
        <h3 className="text-uppercase text-center mb-4">Web-Buzz</h3>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChangeInput}
            value={email}
          />

          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
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
            />

            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? "Hide" : "Show"}
            </small>
          </div>
        </div>
        <div className="row justify-content-between mx-0 mb-1">
        <label htmlFor="patient">
           Patient:{" "}
            <input
              type="radio"
              id="patient"
              name="position"
              value="patient"

              onChange={handleChangeInput}
            />
          </label>
          <label htmlFor="doctor">
            Doctor:{" "}
            <input
              type="radio"
              id="doctor"
              name="position"
              value="doctor"
              onChange={handleChangeInput}
            />
          </label>
        </div>
        <button
        onClick={nostify}
          type="submit"
          className="btn btn-dark w-100"
          disabled={email && password && position? false : true}
        >
          Login
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

export default Doctor;