import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,  useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Approve from ".././pages/prescription";
import { GLOBALTYPES } from ".././redux/actions/globalTypes";
const appointment=(props) =>  {
  const initialState = {
		status: "",
		
	};
  const [cruds, setCruds] = useState([],initialState);
  const { id } = useParams();
  const [crud, setCrud] = useState(initialState);
  const dispatch = useDispatch();


  const { homePosts, scroll ,auth, suggestions} = useSelector((state) => state);
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

useEffect(
		function () {
			async function updateCrud() {
				try {
					const response = await get(`/api/detail/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log(error);
				}
			}
			updateCrud();
		},
	
		[props]
	);

	function handleSubmit(event) {
		event.preventDefault();
		async function updateCrud() {
			try {
				await patch(`/api/detail/${crud._id}`, crud);
				history.push(`/detail/${crud._id}`);
			} catch (error) {
				console.log(error);
			}
		}
		updateCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}



	return (
		<div className="container">
        <div className="status my-3 d-flex">
        <h4> Appointment List</h4>
        </div>
        {cruds.map((crud) => (
            <>
            { auth.user._id === crud.sender ? (
				
            <div className="table-responsive">
			<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
                        <th>Date</th>
						<th>Time</th>
                       
						<th>Action</th>
            <th>Status</th>
					</tr>
				</thead>
				<tbody>
		
								<tr key={crud._id}>
									<td>
										<Link to={`/detail/${crud._id}`} className="link-line">
											{crud.patientname}
										</Link>
									</td>
									<td>{crud.phone}</td>
									<td>{crud.emailp}</td>
                                    <td>{crud.date}</td>
									<td>{crud.time}</td>
                                   
									<td>
									<>
												{ crud.status === 'REJECT' ? (
													<>
													<Link to={`/detail/${crud._id}`} className="btn btn-outline-warning">
											View
										</Link>
                    {' '}
										
													</>
													  ) : (
														
											<><Link to={`/detail/${crud._id}`} className="btn btn-outline-warning">
											View
										</Link>
                    {' '}
										<Link
											to={`/detail/${crud._id}/edit`}
											className="btn btn-outline-success"
										>
											Edit
										</Link>
                    {' '}
										<Link
											to={`/detail/${crud._id}/delete`}
											className="btn btn-outline-danger"
										>
											Delete
										</Link></>
											   )}
											      </>
												  
										
									</td>
                  <td>{crud.status}</td>
								</tr>
		
				</tbody>
			</table>
			</div>
                    ) : (
                      <>
                      { auth.user.fullname === crud.doctorname ? (
                               <div className="table-responsive">
                               <table className="table riped  table-hover table-bordered container">
                                 <thead>
                                   <tr>
                                     <th>Name</th>
                                     <th>Phone</th>
                                     <th>Email</th>
                                                 <th>Date</th>
                                     <th>Time</th>
                                     <th>Action</th>       
                                     <th>Status</th>
                                   </tr>
                                 </thead>
                                 <tbody>
                             
                                         <tr key={crud._id}>
                                           <td>
                                             <Link to={`/profile/${crud.sender}`} className="link-line">
                                               {crud.patientname}
                                             </Link>
                                           </td>
                                           <td>{crud.phone}</td>
                                           <td>{crud.emailp}</td>
                                                             <td>{crud.date}</td>
                                           <td>{crud.time}</td>
                                                            
                                           <td>
                                             <Link to={`/detail/${crud._id}`} className="btn btn-outline-warning">
                                               View
                                             </Link>
                                           </td>
                                           <td>

										   { crud.status === 'APPROVE'  ? (
											<>
                                            <Link
											to={`/detail/${crud._id}/prescription`}
											className="btn btn-outline-info"
										  >
											Add
										  </Link>
											 </>
											   ) : (
<>
												{ crud.status === 'SUCCESS' ? (
													<>
													SUCCESS
													</>
													  ) : (
														<>
												{ crud.status === 'REJECT' ? (
													<>
													REJECT
													</>
													  ) : (
														
											<><Link
											to={`/detail/${crud._id}/approve`}
											className="btn btn-outline-success"
										  >
											Approve</Link>
										  <Link
											to={`/detail/${crud._id}/approve`}
											className="btn btn-outline-danger"
										  >
											Reject</Link></>
											   )}
											      </>
										
											   )}
											   </>

)}
                                           </td>

                                         </tr>
                                  
                                 </tbody>
                               </table>
                               </div>
		              ) : (
                    
     <>

       </>
    )
    }
</>

)
}

</>

))}
  </div>  
	);
}


export default appointment;