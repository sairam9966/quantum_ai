import React from 'react'
 import verify from '../../Assets/check-mark.png'
import './styles.css'

export default function Usercertificate() {
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

            <div style={{height:"50vh", display:"flex", justifyContent:'center'}}>
                <div className="certificate">
                    <div className='certificatedetails'>
                        <p>Name :</p>
                        <p>Starting Date : </p>
                        <p>Ending Date : </p>
                        <p>No. of projects : </p>
                    </div>
                    <div style={{display:'flex', fontSize:".8rem", marginBottom:"6px", justifyContent:"center", height:"10%"}}>
                        <p>Manager Signature</p>
                        <p>TeamLead Signature</p>
                        <p>Employee Signature</p>
                    </div>
                </div>
            </div>

            <div className="downloadlink">
                <a href='#' style={{color:"#215776DB", textDecoration:'none', borderBottom:"1px solid", margin:"2rem"}}>Download your certificate here</a>
            </div>
        </>
    )
}
