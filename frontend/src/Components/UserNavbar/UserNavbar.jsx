import React, { useState } from 'react'
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function UserNavbar(props) {
  const navigate=useNavigate();
  return (
    <div className='navMainContainer'>
      <div className="profile">
        <img className='displayProfile' src={require('../../Assets/profile.png')} />
        <h2>{props.name}</h2>
       
      </div>
      <div className="nav">
        <h2 className="navOptions" style={{ background: props.x === 1 ? "white" : null, color: props.x === 1 ? "#76214ADB" : "white" }} onClick={() => props.setX(1)}>Dashboard</h2>
        <h2 className="navOptions" style={{ background: props.x === 2 ? "white" : null, color: props.x === 2 ? "#76214ADB" : "white" }} onClick={() => props.setX(2)}>Resignation</h2>
        <h2 className="navOptions" style={{ background: props.x === 3 ? "white" : null, color: props.x === 3 ? "#76214ADB" : "white" }} onClick={() => props.setX(3)}>Certificate</h2>
        <h2 className="navOptions" onClick={()=>{
          navigate("/");
        }}>Sign Out</h2>
      </div>
    </div>
  )
}
