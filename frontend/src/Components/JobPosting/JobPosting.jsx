import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function JobPosting() {
    const navigate=useNavigate();
    const [formData, setFormdata] = useState({
        role_name:'',
        locations:'',
        position_type:'',
        job_description:'',
        required_skills:'',
        responsibilities:'',
        additional_info:'',
        reviewed_by:'',
        approved_by:'',
        posting_date:'',
        expiration_date:'',
        division_id:'4',
        dept:'',
        setapartwith:''
      });
    
      const inputHandler = (event) => {
        const { name, value } = event.target;
        setFormdata({
          ...formData,
          [name]: value,
        });
      };
      const dataSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        
          const newJob = ()=>{
            axios.post(`http://localhost:5000/api/jobs`,formData).then((res)=>{
              console.log(res.data);
              navigate('/careers');
            })
          }
          newJob();
      }
    return (

        <div style={{ width: "100vw" ,overflowX: "hidden"}} className='jdHead'>
            <div style={{ overflowX: "hidden", padding: "1rem" }}>

                <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem" }}>
                    <h1 style={{ textAlign: "center" }}>Quantum AI Global</h1>
                    <h1 style={{ textAlign: "center", marginRight: "5rem" }}>Job Posting</h1>
                    <h2  style={{ marginRight: "5rem", backgroundColor: "#215776", padding: ".3rem", color: "white", borderRadius: ".2rem", boxShadow: "10px 10px 10px rgba(0,0,0,0.5)"  ,cursor:"pointer"}}  onClick={dataSubmit} >Submit</h2>
                </div>
                <div style={{ width: "100vw" }}>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="dept">Division/Department</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='dept' name='dept' placeholder='Enter the division for the role' onChange={inputHandler}/>
                    </div>
                    <div style={{ marginTop: 10 }}>
  <label htmlFor="position_type">Position Type</label><br />
  <select
    style={{
      marginTop: 10,
      width: "90%",
      backgroundColor: "lightgrey",
      padding: ".5rem",
      color: "black",
    }}
    id="position_type"
    name="position_type"
    onChange={inputHandler} // Replace with your event handler
  >
    <option value="">select</option>
    <option value="Full Time">Full Time</option>
    <option value="Intern">Intern</option>
  </select>
</div>

                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="locations">Job Location(s)</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='locations' name='locations' placeholder='Enter the job locations for the role'onChange={inputHandler} />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="title">Job title</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='title' name='role_name' placeholder='Enter the job title for the role' onChange={inputHandler}/>
                    </div>

                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="jobDescription">Job Description</label><br />
                        <textarea style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }}  id='jobDescription' name='job_description' placeholder='Enter the Job Description' onChange={inputHandler} />
                    </div>
                    <div style={{ marginTop: 10 }}>
  <label style={{}} htmlFor="division_id">Division</label><br />
  <select
    style={{
      marginTop: 10,
      width: "91%",
      backgroundColor: "lightgrey",
      padding: ".5rem",
      color: "black",
    }}
    id="division_id"
    name="division_id"
    onChange={inputHandler}
  >
    <option value="1">Junior</option>
    <option value="2">Intermediate</option>
    <option value="3">Senior</option>
    <option value="4">Open to All</option>
  </select>
</div>

                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="skills">Skills </label><br />
                        <textarea style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }}  id='skills' name='required_skills' placeholder='Enter the Skills ' onChange={inputHandler}/>
                    </div>

                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="rolesAndResponsibilities">Roles and Responsibilities</label><br />
                        <textarea style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }}  id='rolesAndResponsibilities' name='responsibilities' placeholder='Enter the Roles and Responsibilities' 
                        onChange={inputHandler}/>
                    </div>

                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="setapartWith">Set apart with</label><br />
                        <textarea style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }}  id='setapartWith' name='setapartwith' placeholder='Enter the ways in which the candidate can set themseleves apart with' 
                        onChange={inputHandler}/>
                    </div>

                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="addInfo">Tips and additional Information</label><br />
                        <textarea style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }}  id='addInfo' name='additional_info' placeholder='Enter the tips and additional information' onChange={inputHandler} />
                    </div>
                    <div style={{ marginTop: 10 }}>
  <label htmlFor="reviewed_by">Reviewed By</label><br />
  <input
    style={{
      marginTop: 10,
      width: "90%",
      backgroundColor: "lightgrey",
      padding: ".5rem",
      color: "black",
    }}
    type="text"
    id="reviewed_by"
    name="reviewed_by"
    placeholder="Enter the reviewer's name"
    onChange={inputHandler} 
  />
</div>

<div style={{ marginTop: 10 }}>
  <label htmlFor="approved_by">Approved By</label><br />
  <input
    style={{
      marginTop: 10,
      width: "90%",
      backgroundColor: "lightgrey",
      padding: ".5rem",
      color: "black",
    }}
    type="text"
    id="approved_by"
    name="approved_by"
    placeholder="Enter the approver's name"
    onChange={inputHandler} 
  />
</div>
<div style={{ marginTop: 10 }}>
  <label htmlFor="posting_date">Posting Date</label><br />
  <input
    style={{
      marginTop: 10,
      width: "90%",
      backgroundColor: "lightgrey",
      padding: ".5rem",
      color: "black",
    }}
    type="date" // Use the "date" input type for date fields
    id="posting_date"
    name="posting_date"
    onChange={inputHandler} // Replace with your event handler
  />
</div>

<div style={{ marginTop: 10 }}>
  <label htmlFor="expiration_date">Expiration Date</label><br />
  <input
    style={{
      marginTop: 10,
      width: "90%",
      backgroundColor: "lightgrey",
      padding: ".5rem",
      color: "black",
    }}
    type="date" // Use the "date" input type for date fields
    id="expiration_date"
    name="expiration_date"
    onChange={inputHandler} // Replace with your event handler
  />
</div>



                
                </div>
            </div>
        </div>
    )
}