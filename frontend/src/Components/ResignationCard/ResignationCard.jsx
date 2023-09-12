import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles.css"
import axios from 'axios';
export default function ResignationCard(props) {
  const navigate=useNavigate();
  const resignation=props.resignation;
  const clickHandler=()=>{
      const acceptResignation = ()=>{
        axios.get(`http://localhost:5000/api/acceptResignation/${resignation.id}`).then((res)=>{
               navigate('/home');
               console.log(res.data);
        })
      }
      acceptResignation();
  }
  return (
    <>
    <div className='resignationContainer'>
        <p className='resignationTxtContainer'><p className='resignationTxtHead'>Name</p> <p>:{"  "}</p> <p className='resignationTxtContent'> {resignation.name} </p></p>
        <p className='resignationTxtContainer'> <p className='resignationTxtHead'>Position</p> <p>:{"  "} </p><p className='resignationTxtContent'> {resignation.role}</p></p>
        <p className='resignationTxtContainer'><p className='resignationTxtHead'>Contact</p> <p>:{"  "} </p><p className='resignationTxtContent'> {resignation.phone_number}</p></p>
        <div className='acceptRejectContainer'>
          <p className='acceptBtn' onClick={clickHandler}>Accept</p>
          <p className='rejectBtn'>Reject</p>
        </div>
    </div>
    
    </>
    
  )
}
