import React, { useEffect , useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../components/UserCard";
import 'bootstrap/dist/css/bootstrap.css';
import * as FaIcons from "react-icons/fa";
import { Link,useLocation } from "react-router-dom";
import { GLOBALTYPES } from ".././redux/actions/globalTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faIdCard, faCommentMedical,faPhoneVolume,faCommenting, faHouse ,faCalendar,faCommentOpen, faList,faUsers, faHouseMedicalCircleCheck, faComments } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const Home = () => {
  const { homePosts, scroll ,auth, suggestions} = useSelector((state) => state);
  const dispatch = useDispatch();
  const [date,setDate] = useState(new Date());
  const { theme } = useSelector((state) => state);
	const [cruds, setCruds] = useState([]);

	useEffect(function () {
		async function getCruds() {
			try {
				const response = await axios.get("/api/detail");
				setCruds(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCruds();
	}, []);
useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 100);
  }, []);
	useEffect(function () {
		async function getCruds() {
			try {
				const response = await axios.get("/api/detail");
				setCruds(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCruds();
	}, []);

  return (
    <>
      { auth.user.position === 'patient' ? (
        <div>
          

<h4 style={{paddingTop: '13px'}}>Welcome {auth.user.fullname} </h4>
<hr></hr>
<h4>Dashboard</h4>
     <div className="status my-3  justify-content-around">
     <Link to="/userlist">
        <FontAwesomeIcon icon={faUsers}  beat  className="animation" style={{ color: '#C6EFF9', margin: '30px' ,filter: theme ? "invert(1)" : "invert(0)"}} size="5x"/>
        </Link>
        <Link to="/appointment">
        <FontAwesomeIcon icon={faCalendar} beat  className="animation" style={{ color: '#C6EFF9', margin: '30px'  ,filter: theme ? "invert(1)" : "invert(0)"}} size="5x"/>
        </Link>
        <Link to="/message">
        <FontAwesomeIcon icon={faPhoneVolume}  beat  className="animation" style={{ color: '#C6EFF9', margin: '30px' ,filter: theme ? "invert(1)" : "invert(0)"}} size="5x"/>
        </Link>
        <Link to="/forum">
        <FontAwesomeIcon icon={faCommenting} beat  className="animation" style={{ color: '#C6EFF9' , margin: '30px'  ,filter: theme ? "invert(1)" : "invert(0)"}} size="5x"/>
        </Link>
        <Link to={`/profile/${auth.user._id}`}>
        <FontAwesomeIcon icon={faIdCard} beat  className="animation" style={{ color: '#C6EFF9' , margin: '30px' ,filter: theme ? "invert(1)" : "invert(0)"}} size="5x"/>
        </Link>
        <Link to={`/display`}>
        <FontAwesomeIcon icon={faList}  beat  className="animation" style={{ color: '#C6EFF9' , margin: '30px' ,filter: theme ? "invert(1)" : "invert(0)"}} size="5x" />
        </Link>
        </div>
     <h4 style={{paddingTop: '13px'}}>Record</h4>
     <div className="status my-3 justify-content-around">
     <div className="container">
			<div>
				<div className="d-flex flex-wrap">
					{cruds.map((crud) => (
             <>
             {crud.sender === auth.user._id ? (
               <>

							<div
								className="card"
								style={{ width: 250, margin: 0 }}
								key={crud._id}
							>
								<div class="card-header">
									<h5 className="card-title">
                  <Link to={`/detail/${crud._id}`} className="btn btn-outline-success">
											{crud.date}
										</Link>
									</h5>
								</div>
								<div className="card-body">
									<h5 className="d-flex align-items-center">
										<i className="bi bi-telephone-fill text-success"></i>
											Meet with Dr.{crud.doctorname}
									</h5>
									{/* <h6 className="card-subtitle mb-2 text-muted">
										{crud.phone}
									</h6> */}
                  									<small className="text-muted one-liner">
											Reason:
										</small>
									<p className="card-text limit-char">{crud.description.substring(0, 150)} </p>
									<p className="card-text d-flex align-items-center">
										<i className="bi bi-geo-alt-fill text-warning"></i>
									</p>
								</div>
							</div>
						</>
              ):(
                    <></>
                                )}
                              
                              </>
					))}
				</div>
        </div>
			</div>
		</div>
        
     <h4>We Located At Here</h4>
              <div className="status my-3 d-flex">
              <iframe width="936" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20temerloh&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              </div>
              </div>

      ) : (
        <div>

<h4 style={{paddingTop: '13px'}}>Welcome Dr.{auth.user.fullname} </h4>
<hr></hr>
<h4>Dashboard</h4>
     <div className="status my-4  justify-content-around">
     <Link to="/userlist">
        <FontAwesomeIcon icon={faUsers}  beat  className="animation" style={{ color: '#C6EFF9', margin: '30px' ,filter: theme ? "invert(1)" : "invert(0)"}} size="5x"/>
        </Link>
        <Link to="/appointment">
        <FontAwesomeIcon icon={faCalendar} beat  className="animation" style={{ color: '#C6EFF9', margin: '30px'  ,filter: theme ? "invert(1)" : "invert(0)"}} size="5x"/>
        </Link>
        <Link to="/message">
        <FontAwesomeIcon icon={faPhoneVolume}  beat  className="animation" style={{ color: '#C6EFF9', margin: '30px' ,filter: theme ? "invert(1)" : "invert(0)"}} size="5x"/>
        </Link>


        <Link to="/forum">
        <FontAwesomeIcon icon={faCommenting} beat  className="animation" style={{ color: '#C6EFF9' , margin: '30px'  ,filter: theme ? "invert(1)" : "invert(0)"}} size="5x"/>
        </Link>
        <Link to={`/profile/${auth.user._id}`}>
        <FontAwesomeIcon icon={faIdCard} beat  className="animation" style={{ color: '#C6EFF9' , margin: '30px' ,filter: theme ? "invert(1)" : "invert(0)"}} size="5x"/>
        </Link>
        </div>
       


        <h4 style={{paddingTop: '13px'}}>Recent Request</h4>
     <div className="status my-3 justify-content-around">
     <div className="container">
			<div>
				<div className="d-flex flex-wrap">
          
					{cruds.map((crud) => (
   <>
          {crud.doctorname === auth.user.fullname ? (
            <>
            {crud.status === "PENDING" ? (
	<div
className="card"
style={{ width: 250, margin: 0 }}
key={crud._id}
>
<div class="card-header">
  <h5 className="card-title">
  <Link
											to={`/detail/${crud._id}/approve`}
											className="btn btn-outline-success"
										  >
											{crud.date}</Link>
  </h5>
</div>
<div className="card-body">
  <h5 className="d-flex align-items-center">
    <i className="bi bi-telephone-fill text-success"></i>
      Meet with Dr.{crud.doctorname}
  </h5>
  {/* <h6 className="card-subtitle mb-2 text-muted">
    {crud.phone}
  </h6> */}
                    <small className="text-muted one-liner">
      Reason:
    </small>
  <p className="card-text limit-char">{crud.description}</p>
  <p className="card-text d-flex align-items-center">
    <i className="bi bi-geo-alt-fill text-warning"></i>
  </p>
</div>
</div>
            ):(
<></>
            )}
          
          </>
          ):(
          <></> 
          )}   
    
        
    
						
    </>
					))}
				</div>
        </div>
			</div>
		</div>


     </div>
   
        )
      }


</>
  );
};

export default Home;
