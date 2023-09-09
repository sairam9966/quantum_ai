import React from 'react'
import './styles.css'

export default function EmployeeCard() {
    const name = 'kesava'
    const position = 'web dev'
    const Age = 19

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
                    <p className='name'>{name}</p>

                </p>
                <p style={{display:'flex',alignItems:"center"}}>
                    <p className='name'>Position</p>
                    <p >:</p>
                    <p className='name'>{position}</p>

                </p>
                <p style={{display:'flex',alignItems:"center"}}>
                    <p className='name'>Age</p>
                    <p >:</p>
                    <p className='name'>{Age}</p>

                </p>
            </div>
            <div >
                <button className="infoButton" type='button'>Info</button>
            </div>
        </div>
    </div>
  )
}
