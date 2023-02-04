import React, { useState, useEffect } from "react";
import axios from "axios";
import { get, patch } from "axios";
import { Link,  useParams ,useHistory} from "react-router-dom";
import { Button } from "@material-ui/core";

const prescription=(props) =>  {
    const initialState = {
		status: "",
    diagnosis: "",
		
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
		<div >
      <div className="heading-common">
                <h1><strong>Prescription</strong>
                </h1>  
            </div>
            <hr/>
           
            <p>
				<b>Date</b>:  {crud.date}
			</p>
      <p>
				<b>Time</b>:  {crud.time}
			</p>
      <p>
				<b>Patient Name</b>:  {crud.patientname}
			</p>
      <p>
				<b>Phone</b>:  {crud.phone}
			</p>
      <p>
				<b>Location</b>:  {crud.location}
			</p>
              <form onSubmit={handleSubmit}>
              <div className="form-group">  
              <h6>Process:</h6> 
                    <select value={crud.status} name='status'  className="form-control"   onChange={(handleChange)}
                  >
            <option>Select Treatment</option>
            <option value='SUCCESS' >
              Done
            </option>
          </select>
          </div>    
          <div className="form-group">  
          <h6>Diagnosis:</h6>  
          <textarea
						name="diagnosis"
						row="5"
						value={crud.diagnosis}
						onChange={handleChange}
						className="form-control"
					/>
          </div>
									
            <div className="btn-group">
            <Button   color="primary"
                variant="contained"
                type="submit"

              >
                Add Prescription&nbsp;<i className="fas fa-user-plus"></i>
        </Button>
        <Button   color="danger"
                variant="contained"
                type="submit"
                onClick={handleCancel}

              >
                Cancel&nbsp;<i className="fas fa-times"></i>
        </Button>

				</div>
                                    </form>
						
						
						</div>
			
	

	);
}

export default prescription;