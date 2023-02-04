import React, { useState, useEffect } from "react";
import axios from "axios";
import { get, patch } from "axios";
import { Link,  useParams ,useHistory} from "react-router-dom";

const detailEdit=(props) =>  {
	const initialState = {
		patientname: "",
		age: "",
		phone: "",
		emailp: "",
		date: "",
		time: "",
		description: "",
	};
	const [crud, setCrud] = useState(initialState);

	const { _id } = useParams();
	const history = useHistory();

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

	function handleCancel() {
		history.push(`/appointment`);
	}

	return (
		<div className="container">
			        <div className="status my-3 d-flex">
        <h4> Edit Appointment </h4>
		
        </div>
		<p>Meet with Doctor <span style={{fontWeight: 'bold'}}>{crud.doctorname}</span> </p>
			<hr />
		
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Patient Name</label>
					<input
						name="patientName"
						type="text"
						required
						value={crud.patientname}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						name="phone"
						type="text"
						required
						value={crud.phone}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						name="emailp"
						type="text"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required
						value={crud.emailp}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Location</label>
					<input
						name="location"
						type="text"
						required
						value={crud.location}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Date</label>
					<input
						name="date"
						type="date"
						value={crud.date}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Time</label>
					<input
						name="time"
						type="time"
						value={crud.time}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Description</label>
					<textarea
						name="description"
						row="5"
						value={crud.description}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="btn-group">
					<button type="submit" className="btn btn-outline-primary">
						Update
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-outline-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default detailEdit;