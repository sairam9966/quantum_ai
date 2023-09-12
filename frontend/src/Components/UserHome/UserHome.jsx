import React, { useState } from 'react'
import UserNavbar from '../UserNavbar/UserNavbar'
import Userdashboard from '../Userdashboard/Userdashboard'
import Usercertificate from '../Usercertificate/Usercertificate'
import Userresignation from '../Userresignation/Userresignation'
// import Postedjobs from '../postedjobs/Postedjobs'
import './styles.css'


export default function UserHome() {
  const [x,setX] = useState(1);
  const [name,setName]=useState('employee');
  const [emp,setEmp]=useState({});
  return (
    <div className='homeMainContainer'>
      <div className='navbarMainContainer'>
        <UserNavbar x={x} setX={setX} name={name}/>
      </div>
      <div className='contentContainer'>
        {
          x===1? <Userdashboard setName={setName} setEmp={setEmp}/>: x===2?<Userresignation emp={emp}/>: x===3? <Usercertificate emp={emp}/>: <Userdashboard/>
        }
        
      </div>

    </div>
  )
}
