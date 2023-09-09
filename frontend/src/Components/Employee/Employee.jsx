import React from 'react'
import './styles.css'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
export default function Employee() {
  return (
    <div >
        <div className="topBar">
            <div className="search">
                <input  className='searchBar' type="text" placeholder="Search for Employee"/>
                <button type='button'></button>
            </div>
            <div className="addNewItem">
                <button className='button' type='button'>New Employee</button>
            </div>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
          <EmployeeCard/>
          <EmployeeCard/>
          <EmployeeCard/>
          <EmployeeCard/>
          <EmployeeCard/>
          <EmployeeCard/>
          <EmployeeCard/>
          <EmployeeCard/>
          <EmployeeCard/>
          <EmployeeCard/>

        </div>
    </div>
  )
}
