import React, { useState } from 'react'
import './styles.css';
import { useNavigate } from 'react-router-dom';


export default function Navbar(props) {

  const navigate = useNavigate()


  return (
    <div className='navMainContainer'>
      <div className="profile">
        <img className='displayProfile' src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png?f=webp" />
        <h2>Akhil Dharmana</h2>
        <h4>Manager</h4>
      </div>
      <div className="nav">
        <h2 className="navOptions" style={{ background: props.x === 1 ? "white" : null, color: props.x === 1 ? "#76214ADB" : "white" }} onClick={() => props.setX(1)}>Employee</h2>
        <h2 className="navOptions" style={{ background: props.x === 2 ? "white" : null, color: props.x === 2 ? "#76214ADB" : "white" }} onClick={() => props.setX(2)}>Jobs</h2>
        <h2 className="navOptions" style={{ background: props.x === 3 ? "white" : null, color: props.x === 3 ? "#76214ADB" : "white" }} onClick={() => props.setX(3)}>Resignations</h2>
        <h2 onClick={()=>{
          navigate("/")
        }} className="navOptions">Sign Out</h2>
      </div>
    </div>
  )
}
