import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,  useParams } from "react-router-dom";

const detail=(props) =>  {
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

	return (
		<div className="container">
        <div className="status my-3 d-flex">
        <h4> Appointment List</h4>
        </div>
		
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
						
					</tr>
				</thead>
				<tbody>
					{cruds &&
						cruds.map((crud) => {
							return (
								<tr key={crud._id}>
									<td>
										<Link to={`/cruds/${crud._id}`} className="link-line">
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
								
										<Link
											to={`/detail/${crud._id}/edit`}
											className="btn btn-outline-success"
										>
											Edit
										</Link>
								
										<Link
											to={`/detail/${crud._id}/delete`}
											className="btn btn-outline-danger"
										>
											Delete
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			</div>
		</div>
	);
}


export default detail;