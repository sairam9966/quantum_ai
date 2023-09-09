import React from 'react'
import "./styles.css"
export default function ResignationCard() {
  return (
    <>
    <div className='resignationContainer'>
        <p className='resignationTxtContainer'><p className='resignationTxtHead'>Name</p> <p>:{" "}</p> <p className='resignationTxtContent'> Killamsetty keerthi </p></p>
        <p className='resignationTxtContainer'> <p className='resignationTxtHead'>Position</p> <p>:{" "} </p><p className='resignationTxtContent'> Front end Engineer </p></p>
        <p className='resignationTxtContainer'><p className='resignationTxtHead'>Experience</p> <p>:{" "} </p><p className='resignationTxtContent'> 2 yrs</p></p>
        <div className='acceptRejectContainer'>
          <p className='acceptBtn'>Accept</p>
          <p className='rejectBtn'>Reject</p>
        </div>
    </div>
    
    </>
    
  )
}
