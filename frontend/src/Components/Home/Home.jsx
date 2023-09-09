import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Employee from '../Employee/Employee'
import Jobs from '../Jobs/Jobs'
import Resignation from '../Resignation/Resignation'
import Login from '../Login/Login'
import './styles.css'

export default function Home() {
  const [x,setX] = useState(1);

  return (
    <div className='homeMainContainer'>
      <div className='navbarMainContainer'>
        <Navbar x={x} setX={setX}/>
      </div>
      <div className='contentContainer'>
        {
          x===1? <Employee/>: x===2?<Jobs/>: x===3?<Resignation/>: <Employee/>
        }
      </div>

    </div>
  )
}
