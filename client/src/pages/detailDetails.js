import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,  useParams,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const detailDetails=(props) =>  {
	const [crud, setCrud] = useState({});
	const { homePosts, scroll ,auth, suggestions} = useSelector((state) => state);
	const { _id } = useParams();
	const history = useHistory();

	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`/api/detail/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCrudById();
		},
	
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`/api/detail/${_id}`);
			history.push("/appointment");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container">
			        <div className="status my-3 d-flex">
					<h4> Appointment Details</h4>
        			</div>
					<>
      { auth.user.position === 'patient' ? (
        <div>

<p>
				<b>Doctor Name</b>:  {crud.doctorname}
			</p>
			<p>
				<b>Contact Number</b>:  {crud.phone} 
			</p>
			<p>
				<b>Email</b>: {crud.emailp}
			</p>
			<p>
				<b>Location</b>: {crud.location}
			</p>
			<p>
				<b>Age</b>: {crud.age}
			</p>
			<p>
				<b>Appointment Date</b>: {crud.date}
			</p>
			<p>
				<b>Appointment Time</b>: {crud.time}
			</p>
			<p>
				<b>Description</b>: <p align="justify">{crud.description}</p>
			</p>
			<div className="btn-group ">
				<Link to={`/detail/${crud._id}/edit`} className="btn btn-outline-primary">
					Edit
				</Link>
				<button onClick={handleDelete} className="btn btn-outline-danger">
					Delete
				</button>
				<Link to="/appointment" className="btn btn-outline-secondary">
					Close
				</Link>
			</div>
			<hr />
</div>

) : (
  <div>

<p>
				<b>Doctor Name</b>:  {crud.doctorname}
			</p>
			<p>
				<b>Contact Number</b>:  {crud.phone} 
			</p>
			<p>
				<b>Email</b>: {crud.emailp}
			</p>
			<p>
				<b>Location</b>: {crud.location}
			</p>
			<p>
				<b>Age</b>: {crud.age}
			</p>
			<p>
				<b>Appointment Date</b>: {crud.date}
			</p>
			<p>
				<b>Appointment Time</b>: {crud.time}
			</p>
			<p>
				<b>Description</b>: <p align="justify">{crud.description}</p>
			</p>
			<div className="btn-group ">
				<Link to="/appointment" className="btn btn-outline-secondary">
					Close
				</Link>
			</div>
			<hr />
	
</div>
   
   )
 }


</>


		</div>
	);
}

export default detailDetails;