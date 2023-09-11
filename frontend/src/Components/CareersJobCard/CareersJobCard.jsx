import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom';
export default function CareersJobCard(props) {
  const navigate=useNavigate();
  const job=props.job;
 
   
  return (
    <div className='careersJobCardContainer'>
        <p style={{fontWeight:700,fontSize:"1rem",marginTop:".8rem"}}>{job.role_name}</p>
        <p style={{fontSize:".9rem",fontWeight:600,marginTop:".8rem"}}>Exp : <span style={{fontWeight:400}}>3+yrs</span></p>
        <p style={{fontSize:".9rem",fontWeight:600,marginTop:".8rem"}}>Key Skills : <span style={{fontWeight:400}}>{job.required_skills}</span></p>
        <p style={{fontSize:".9rem",fontWeight:600,marginTop:".8rem"}}>Job Location : <span style={{fontWeight:400}}>{job.locations}</span></p>
        <p style={{float:"right",backgroundColor:"#215776",color:"white",padding:".4rem",borderRadius:".4rem",width:"50%",textAlign:"center",marginTop:"1rem"} } onClick={()=>{
          navigate(`/jobdescription/${job.id}`);
        }}>Apply</p>
    </div>
  )
}
