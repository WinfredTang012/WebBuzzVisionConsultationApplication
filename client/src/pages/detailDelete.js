import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,  useParams, useHistory } from "react-router-dom";

const detailDelete=(props) =>  {
	const [crud, setCrud] = useState({});

	const { _id } = useParams();
	const history = useHistory();

	useEffect(
		function () {
			async function deleteCrudById() {
				try {
					const response = await axios.get(`/api/detail/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			deleteCrudById();
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
					<h4> Delete Appointment</h4>
        			</div>
					<hr/>
			<h2>{crud.companyName}</h2>

			<p>
				<b>Phone</b>: <a href={`tel:+${crud.phone}`}> {crud.phone} </a>
			</p>

			<p>
				<b>Email</b>: {crud.email}
			</p>
			<p>
				<b>Location</b>: {crud.location}
			</p>
			<p>
				<b>Link</b>:<a href={`${crud.link}`}> {crud.link} </a>
			</p>
			<p>
				<b>Description</b>: {crud.description}
			</p>
			<p>
				<small>
					<b>ID</b>: {crud._id}
				</small>
			</p>
			<div className="btn-group">
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/appointment" className="btn btn-secondary">
					Cancel{" "}
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default detailDelete;