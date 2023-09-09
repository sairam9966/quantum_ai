import React, { useState } from 'react'
import JobCard from '../JobCard/JobCard'

export default function Jobs() {
  const [flag,setFlag] = useState(false)
  return (
    <div >
        <div className="topBar">
            <div className="search">
                <input  className='searchBar' type="text" placeholder="Search for Employee"/>
                <button type='button'></button>
            </div>
            <div className="addNewItem">
                <button onClick={()=>setFlag(true)} className='button' type='button'>New Role </button>
            </div>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>


        </div>

        {flag?<CreateNewRole setFlag={setFlag}/>:null}
    </div>
  )
}
const CreateNewRole = (props) => {
  return (
      <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "30vw", height: "60vh", backgroundColor: "rgba(255,255,255,1)", padding: "2rem",  boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",overflowX:"hidden" }}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 10"}}>
              <p style={{ width: "100%", color: "black",fontWeight:"800",fontSize:30 }}>Fill in the New Role</p>


              <p onClick={() => props.setFlag(false)} style={{ width: "100%", textAlign: "right", color: "black",cursor:"pointer" }}>Close</p>
              </div>
              <div style={{}}>
                  <div style={{ marginTop: 10 }}>
                      <label style={{}} htmlFor="RoleName">Role Name</label><br />
                      <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='RoleName' name='RoleName' placeholder='Enter your Role Name' />
                  </div>
                  <div style={{ marginTop: 10 }}>
                      <label style={{}} htmlFor="prevCand">Previous Employees</label><br />
                      <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='prevCand' name='prevCand' placeholder='Enter the number of previous employees' />
                  </div>

                  <div style={{ marginTop: 10 }}>
                      <label style={{}} htmlFor="newCand">New Employees</label><br />
                      <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='newCand' name='newCand' placeholder='Enter the number of new employees needed' />
                  </div>
                  
                      
              </div>

              <p style={{ marginTop:20,marginLeft:"20%", backgroundColor: "#215776", padding: ".3rem", color: "white", borderRadius: ".2rem", boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",width:"50%",textAlign:"center" }}>Submit</p>

          </div>

      </div>
  )
}