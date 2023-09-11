import React, { useEffect ,useState} from 'react'
import './styles.css'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Employee() {
const navigate=useNavigate();
const [allEmployee,setAllEmployee]=useState([]);
  useEffect(()=>{
    const getEmployees = ()=>{
    
      axios.get("http://localhost:5000/api/employees").then((res)=>{
        console.log(res.data);
        setAllEmployee(res.data);
      })
    }
    getEmployees();
  },[])
  return (
    <div >
        <div className="topBar">
            <div className="search">
                <input  className='searchBar' type="text" placeholder="Search for Employee"/>
                <button type='button'></button>
            </div>
            <div className="addNewItem">
                <button onClick={()=>{
                  navigate('/createEmployee');
                }} className='button' type='button'>New Employee</button>
            </div>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {
          allEmployee?.map((employee)=>{
            return(
              <EmployeeCard key={employee.id} employee={employee}/>
            )
          })
        }

          

        </div>
    </div>
  )
}
