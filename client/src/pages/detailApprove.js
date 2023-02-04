import React, { useState, useEffect } from "react";
import axios from "axios";
import { get, patch } from "axios";
import { Link,  useParams ,useHistory} from "react-router-dom";

const detailApprove=(props) =>  {
    const initialState = {
		status: "",
		
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
				history.push(`/appointment`);
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
					<h4> Approve Appointment</h4>
        			</div>
			<hr />

					<div
						className="card mb-3"
						style={{ maxWidth: "800px" }}
						key={crud._patientname}
					>
						<div className="row g-0">
							<div className="col-md-4 pl-1 ">
                            Date: {crud.date}
							<br></br>
                           Time:{crud.time}
							</div>
							<div className="col-md-8">
								<div class="card-header">
									<h5 className="card-title">
							
                                        {crud.patientname}
									
									</h5>
								</div>
								<div className="card-body ">
									<h6 className="d-flex align-items-center">
										<i className="bi bi-telephone-fill text-success"></i>
				
											{crud.phone}
										
									</h6>
									<p className="card-text  d-flex align-items-center">
										<i className="bi bi-geo-alt-fill text-warning"></i>
										<small className="text-muted one-liner">
											{crud.location}
										</small>
									</p>
                                    <p className="card-text limit-char">{crud.description}</p>
                                    <form onSubmit={handleSubmit}>
									<div class="card-footer">
                                    <select value={crud.status} name='status'  className="form-control"   onChange={(handleChange)}
                  >
            <option>Select Status</option>
            <option value='APPROVE' >
              Approve
            </option>
            <option value='REJECT'>
              Reject
            </option>
            <option value='PENDING' >
              Pending
            </option>
          </select>
									</div>
                                    <div className="btn-group">
					<button type="submit" className="btn btn-outline-primary">
						Update
					</button>
				</div>
                                    </form>
								</div>
							</div>
						</div>
					</div>
			
	
		</div>
	);
}

export default detailApprove;