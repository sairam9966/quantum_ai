import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import resume from '../../Assets/1.pdf'
export default function ApplicationDetails(props) {
  const {id}=useParams();
  // const job_id = props?.job_id?props.job_id:"a25c13f1-c7f0-415e-9ca0-8fe0164a9564"
  const [applicants,setApplicants] = useState([])

  useEffect(()=>{
    const getApplicants = ()=>{
      axios.get(`http://localhost:5000/api/applicants/by-job/${id}`).then((res)=>{
        console.log(res.data)
        setApplicants(res.data)
      })
    }
    getApplicants();
  },[])
  let sNo=0;

  return (
    <div style={{overflow:"scroll",overflowX:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100vw",backgroundColor:"white",boxShadow:"10px 10px 10px rgba(0,0,0,0.5)",borderBottomLeftRadius:"1rem",paddingTop:"1rem",paddingBottom:"1rem",position:"fixed"}}>
        <p style={{width:"10%",textAlign:"center",fontSize:20,fontWeight:"600"}}>S.NO</p>
        <p style={{width:"20%",textAlign:"center",fontSize:20,fontWeight:"600"}}>Name</p>
        <p style={{width:"10%",textAlign:"center",fontSize:20,fontWeight:"600"}}>ATS Score</p>
        <p style={{width:"15%",textAlign:"center",fontSize:20,fontWeight:"600"}}>Contact Number</p>
        <p style={{width:"16%",textAlign:"center",fontSize:20,fontWeight:"600"}}>Email</p>
        <p style={{width:"16%",textAlign:"center",fontSize:20,fontWeight:"600"}}>Resume</p>
      </div>
      <div style={{marginTop:"5rem"}}>
        {
          applicants?.map((applicant)=>{
            sNo++;
            return(

              <ApplicationDetailsCard applicant={applicant} sNo={sNo}/>
            )

          })
        }
      </div>
    </div>
  )
}


const ApplicationDetailsCard = (props)=>{
  const applicant = props.applicant;
  return(
    <div style={{marginTop:"3rem"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100vw",paddingTop:"1rem",paddingBottom:"1rem"}}>
        <p style={{width:"10%",textAlign:"center",fontSize:16,fontWeight:"400"}}>{props.sNo}</p>
        <p style={{width:"20%",textAlign:"center",fontSize:16,fontWeight:"400"}}>{applicant.first_name+" "+applicant.last_name}</p>
        <p style={{width:"10%",textAlign:"center",fontSize:16,fontWeight:"400"}}>{applicant.ats}%</p>
        <p style={{width:"15%",textAlign:"center",fontSize:16,fontWeight:"400"}}>+91 {applicant.phone_number}</p>
        <p style={{width:"16%",textAlign:"center",fontSize:16,fontWeight:"400"}}></p>{applicant.email}
        <a style={{width:"16%",textAlign:"center",fontSize:16,fontWeight:"400"}} href={resume}>resume</a>
      </div>
      <div style={{paddingLeft:"4rem"}}>
        <p style={{fontSize:20,fontWeight:"600"}}>Summary</p>
        <p style={{width:"90%",backgroundColor:"white",boxShadow:"10px 10px 10px rgba(0,0,0,0.3)",borderRadius:"1rem",padding:"1rem",}}>
          {applicant.resume_desc}
        </p>
      </div>
      <div style={{marginTop:"1.5rem",borderBottomWidth:2,borderBottomColor:"gray",borderStyle:"solid",width:"90%"}}></div>
    </div>
  )
}