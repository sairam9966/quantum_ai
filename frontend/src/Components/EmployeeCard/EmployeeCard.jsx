import React,{useState} from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';
import Userdashboard from '../Userdashboard/Userdashboard';
export default function EmployeeCard(props) {
    const navigate=useNavigate();
    const employee=props.employee;
  return (
    <div>
        <div className="card">
            <div>
                <img className="cardImg" src={require('../../Assets/profile.png')}/>
            </div>
            <div className='details' style={{fontSize:"0.8rem"}}>
                <p style={{display:'flex',alignItems:"center"}}>
                    <p className='name'>Name</p>
                    <p >:</p>
                    <p className='name'>{employee.name}</p>

                </p>
                <p style={{display:'flex',alignItems:"center"}}>
                    <p className='name'>Position</p>
                    <p >:</p>
                    <p className='name'>{employee.position}</p>

                </p>
                <p style={{display:'flex',alignItems:"center"}}>
                    <p className='name'>Age</p>
                    <p >:</p>
                    <p className='name'>{employee.age}</p>

                </p>
            </div>
            <div >
                <button className="infoButton" type='button' onClick={()=>{
                    navigate(`/user/dashboard/${employee.id}`);
                }}>Info</button>
            </div>
        </div>
    </div>
  )
}
