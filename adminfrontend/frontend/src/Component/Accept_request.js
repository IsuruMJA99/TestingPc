import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav1 from './Nav';
import { useNavigate } from 'react-router-dom';
import img1 from './images/Untitled-3.jpeg';
import './accept_request.css';

function Accept_request() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost/react/avireq.php');
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
              function Fwd_Pay(){
                navigate("/Homepage/Accept_request/payment");
              }

             
              const[record,setRecord] = useState([])
              const [modeldata,setModeldata] = useState({
                 id:'',
                 userName:'',
                 username:'',
                 email:'',
                 website:''
              })


  return (
    <div className="container_Acc">

      <div className="row mt-2 "> 
        <div className="abcd">

            <h5 className="Hedding_Acc_Req">
               Accept Request
            </h5>
          <div class="Tab_Main">
            <table className="table table-striped table-sm">
              <thead className="Tab_head">
        
                  <th>orderID</th>
                  <th>tests</th>
                  <th>parameters</th>
                  <th>sampleName</th>
                  <th>sampleType</th>
                  <th>sampleDisposition</th>
                  <th>Upload File</th>
                  <th>payment</th>
                </thead>
              <tbody >
          
        {employees.map((employee) => (
          <tr  key={employee.id}>
            <td>{employee.orderID}</td>
            <td>{employee.tests}</td>
            <td>{employee.parameters}</td>
            <td>{employee.sampleName}</td>
            <td>{employee.sampleType}</td>
            <td>{employee.sampleDisposition}</td>
            <td><button type="button" class="btn btn-secondary" onClick={Fwd_Pay}>Upload</button></td>
            <td><button class="btn btn-primary" onClick={(e)=>fetchData(employee.id)} data-toggle="modal" data-target="#myModal">Get Details</button></td>
          
          </tr>
        ))}
          
        </tbody>

      </table>
      
    </div>

    </div>
    
            
</div> 



{/* 
 Model Box  */}
 
 <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Detail No :</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
             
           <div class="modal-body">
            




           <table className="table table-striped table-sm">
              <thead className="Tab_head">
        
                  <th>orderID</th>
                  <th>tests</th>
                  <th>parameters</th>
                  <th>sampleName</th>
                  <th>sampleType</th>
                  <th>sampleDisposition</th>
                  
                </thead>
              <tbody >
          
        
          <tr  key={modeldata.id}>
            <td>{modeldata.orderID}</td>
            <td>{modeldata.tests}</td>
            <td>{modeldata.parameters}</td>
            <td>{modeldata.sampleName}</td>
            <td>{modeldata.sampleType}</td>
            <td>{modeldata.sampleDisposition}</td>
            
          
          </tr>
       
          
        </tbody>

      </table>





                    <div className='Container_Cont'>
                       <img src ={img1} height={"100%"} width={"100%"}/>
                    </div>

                  </div>
                <div class="modal-btn" >
              <button type="button" className="btn01" data-dismiss="modal">Close_btn01</button>
              <button type="button" className="btn02" data-dismiss="modal">Close_btn02</button>
            
            </div>  
  
            </div>
          </div>
        </div>





</div> 





  );
}

export default Accept_request;
