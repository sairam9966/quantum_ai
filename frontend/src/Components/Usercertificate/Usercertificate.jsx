import React from 'react'


import {Link} from 'react-router-dom'
 import verify from '../../Assets/check-mark.png'
import './styles.css'
import Pdf from "../../Assets/2.pdf"

export default function Usercertificate(props) {
    const emp=props.emp;
    return (
        <>
            <div style={{height:"20vh"}}>
                <div className="status">
                    <div>
                        <p>Status:</p>
                        <p style={{ color: "#76214A", fontSize: "1rem", fontWeight: "700" }}>Verified</p>
                    </div>
                    <div>
                        <img src={verify} alt="" style={{ width: "30px", height: "30px", margin: "5px" }} />
                    </div>
                </div>
                <p style={{ fontSize: "1.5rem", fontWeight: "600", paddingLeft: "1rem" }}>Resignation Request</p>
            </div>

            <div style={{height:"30vh", display:"flex", justifyContent:'center', paddingBottom:'20px'}}>
                <div className="certificate">
                    <div className='certificatedetails'>
                        <p>Name : {emp.name}</p>
                        <p>Starting Date :10-10-2010 </p>
                        <p>Ending Date : 11-09-2023</p>
                        
                    </div>
                    {/* <div style={{display:'flex', fontSize:".8rem", paddingBottom:"20px", justifyContent:"center", height:"10%"}}>
                        <p>Manager Signature </p>
                        <p>TeamLead Signature</p>
                        <p>Employee Signature</p>
                    </div> */}
                </div>
            </div>

            <div className="downloadlink">
        {/* <Link
          to="/pdf-page" // This should match the route path you set in your routing configuration
          style={{ color: "#215776DB", textDecoration: 'none', borderBottom: "1px solid", margin: "2rem" }}
        >
          Download your certificate here
        </Link> */}
        <a href={Pdf} style={{width:"100vw",height:"100vh",marginLeft:"45%"}}>View certificate</a>
      </div>
        </>
    )
}
