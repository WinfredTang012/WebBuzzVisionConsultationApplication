import React, { useEffect , useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Approve from ".././pages/prescription";
import Display from ".././pages/display";
import { useHistory, Link ,useParams } from "react-router-dom";
import { GLOBALTYPES } from ".././redux/actions/globalTypes";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const display = () => {
  const [cruds, setCruds] = useState([]);
  const { theme ,auth} = useSelector((state) => state);

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

        <div className="status my-3 d-flex">
        <h4> Prescription List</h4>
        </div>
        {cruds.map((crud) => (
            <>
            { auth.user._id === crud.sender ? (
              <>              { crud.status === "SUCCESS" ? (
                <div className="status my-2 d-flex">
                <div className="p-2 flex-fill">
                <Table>
              <Thead>
                <Tr>
            <Th>Patient Name</Th>
            <Th>Age</Th>
            <Th>Date</Th>
            <Th>Address</Th>
            <Th>Diagnosis</Th>
            
          </Tr>
          </Thead>
          <Tbody>
          <Tr>
    
            <Td>{crud.patientname}</Td>
            <Td>{crud.age}</Td>
            <Td>{crud.date}</Td>
            <Td>{crud.location}</Td>
            <Td> {crud.diagnosis} </Td>
      
          </Tr>
          </Tbody>
          </Table>
        </div>
               </div>
  
                ) : (
                  <>
                
        
            </>
               
  )
                }</>
            ):(
          <></>
            )}



          </>
         
  ))}

  </>

  )
            }

export default display;