import React from 'react'
import "./styles.css"

export default function CareersJobCard() {
  return (
    <div className='careersJobCardContainer'>
        <p style={{fontWeight:700,fontSize:"1rem",marginTop:".8rem"}}>Senior Software Developer</p>
        <p style={{fontSize:".9rem",fontWeight:600,marginTop:".8rem"}}>Exp : <span style={{fontWeight:400}}>3+yrs</span></p>
        <p style={{fontSize:".9rem",fontWeight:600,marginTop:".8rem"}}>Key Skills : <span style={{fontWeight:400}}>React,React Native</span></p>
        <p style={{fontSize:".9rem",fontWeight:600,marginTop:".8rem"}}>Job Location : <span style={{fontWeight:400}}>Banglore,Chennai</span></p>
        <p style={{float:"right",backgroundColor:"#215776",color:"white",padding:".4rem",borderRadius:".4rem",width:"50%",textAlign:"center",marginTop:"1rem"}}>Apply</p>
    </div>
  )
}
