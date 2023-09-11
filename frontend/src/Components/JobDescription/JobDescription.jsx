import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function JobDescription(props) {
    const {id} = useParams();
    const [jobDesc,setJobDescription]=useState({});

    useEffect(()=>{
        const getJobDescription = ()=>{
          axios.get(`http://localhost:5000/api/jobs/${id}`).then((res)=>{
            console.log(res.data);
            setJobDescription(res.data);
          })
        }
        getJobDescription();
      },[]);

    const [flag, setFlag] = useState(false);
    return (
        <div style={{ width: "100vw" }} className='jdHead'>
            <div style={{ overflowX: "hidden", padding: "1rem" }}>

                <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem" }}>
                    <h1 style={{ textAlign: "center" }}>Quantum AI Global</h1>
                    <h1 style={{ textAlign: "center", marginRight: "5rem" }}>Job Description</h1>
                    <h2 onClick={() => setFlag(true)} style={{ marginRight: "5rem", backgroundColor: "#215776", padding: ".3rem", color: "white", borderRadius: ".2rem", boxShadow: "10px 10px 10px rgba(0,0,0,0.5)" ,cursor:"pointer"}}>Apply</h2>

                </div>
                <div style={{ width: "100vw" }}>
                    <p style={{ marginTop: "1rem" }}> <span style={{ fontWeight: "600", }}>Division/Department :</span> <span>{jobDesc.dept}</span> </p>
                    <p style={{ marginTop: "1rem" }}> <span style={{ fontWeight: "600", }}>Locations : </span><span>{jobDesc.locations}</span></p>
                    <p style={{ marginTop: "1rem" }}> <span style={{ fontWeight: "600", }}>Job Title : </span><span>{jobDesc.role_name}</span></p>
                    <p style={{ fontWeight: "600", marginTop: "1rem", width: "90%" }}>Job Description :
                        <p style={{ fontWeight: "400", }}>
                            {jobDesc.job_description}
                        </p>
                    </p>
                    <p style={{ fontWeight: "600", marginTop: "1rem", width: "90%" }}>Skills and Experience :
                        <p style={{ fontWeight: "400", }}>
                          {jobDesc.required_skills}
                        </p>
                    </p>
                    <p style={{ fontWeight: "600", marginTop: "1rem", width: "90%" }}>Roles and Responsibilities :
                        <p style={{ fontWeight: "400", }}>
                            {jobDesc.required_skills}
                        </p>
                    </p>
                    <p style={{ fontWeight: "600", marginTop: "1rem", width: "90%" }}>Set yourself apart with :
                        <p style={{ fontWeight: "400", }}>
                           {jobDesc.setapartwith}
                        </p>
                    </p>
                    <p style={{ fontWeight: "600", marginTop: "1rem", width: "90%" }}>Tips and additional information :
                        <p style={{ fontWeight: "400", }}>
                           {jobDesc.additional_info}
                        </p>
                    </p>
                </div>
            </div>
            {flag ? <JobForm setFlag={setFlag} id={jobDesc.id}/> : null}
        </div>
    )
}


const JobForm = (props) => {
    const navigate=useNavigate()
    const id=props.id;
    const [formData,setFormData]=useState({
      first_name:'',
      last_name:'',
      email:'',
      phone_number:'',
      resume_url:'https://resume',
      cover_letter:'',
      gender:''
    })
    const inputHandler = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const dataSubmit = (e) => {
        e.preventDefault()
      
        //pushing  resume into the cloudiunary/aws and get the link 
          const newApplicant = ()=>{
            axios.post(`http://localhost:5000/api/jobs/apply/${id}`,formData).then((res)=>{
              navigate('/careers');
            })
          }
          newApplicant();
      }
    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "40vw", height: "80vh", backgroundColor: "rgba(255,255,255,1)", padding: "2rem",  boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",overflowX:"hidden" }}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 10"}}>
                <p style={{ width: "100%", color: "black",fontWeight:"800",fontSize:30 }}>Fill in your details</p>


                <p onClick={() => props.setFlag(false)} style={{ width: "100%", textAlign: "right", color: "black",cursor:"pointer" }}>Close</p>
                </div>
                <div style={{}}>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="firstname">First Name</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='firstname' name='first_name' placeholder='Enter your first  name' onChange={inputHandler}/>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="lastname">Last Name</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='lastname' name='last_name' placeholder='Enter your last  name' onChange={inputHandler} />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="email">Email</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='email' name='email' placeholder='Enter your email address' onChange={inputHandler}/>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="phone">Phone Number</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='phone' name='phone_number' placeholder='Enter your phone number' onChange={inputHandler} />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="firstname">Upload your Resume</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="file" id='Resume' name='resume_url' onChange={inputHandler}  />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="coverletter">Cover Letter</label><br />
                        <textarea style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }}  id='coverletter' name='cover_letter' placeholder='Enter your coverletter' onChange={inputHandler} />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="gender">Gender</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='gender' name='gender' placeholder='Enter your gender'onChange={inputHandler} />
                    </div>      
                </div>

                <p style={{ marginTop:20,marginLeft:"20%", backgroundColor: "#215776", padding: ".3rem", color: "white", borderRadius: ".2rem", boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",width:"50%",textAlign:"center" }} onClick={dataSubmit}>Submit</p>

            </div>

        </div>
    )
}