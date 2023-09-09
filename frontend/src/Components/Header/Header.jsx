import React from 'react'
import "../Header/styles.css"
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate()
  return (
    <div className='HeaderMainContainer'>
        <div className='logoContainer'>
          {/* Logo */}
        </div>
        <div className='navContainer'>
          <nav className="navbar">
            <ul className='list'>
              <li className='listItem'>About</li>
              <li onClick={()=>{
                navigate("/careers")
              }} className='listItem'>Careers</li>
              <li className='listItem'>Login</li>
            </ul>
          </nav>
        </div>
    </div>
  )
}
