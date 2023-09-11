import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './styles.css'
import axios from 'axios';


export default function Userdashboard(props) {
    const {id} = useParams();
    const [user,setUser]=useState({});
    useEffect(()=>{
        const getUserDetails = ()=>{
          axios.get(`http://localhost:5000/api/employees/${id}`).then((res)=>{
            
            setUser(res.data);
            props.setEmp(res.data);
          })
        }
        getUserDetails();
      },[]);
      props.setName(user.name);
    return (
        <div>
            <h1 style={{ padding: "2rem" }}>Dashboard</h1>
            <div className='emdetails'>
                <div className="Employeedetails">
                    <p>START DATE : {user.start_date}</p>
                    <p>STATUS : {user.status}</p>
                    <p>POSITION : {user.position}</p>
                    <p>LOCATION : {user.location}</p>
                    <p>AGE : {user.age}</p>
                    <p>EMAIL : {user.email}</p>
                    <p>CONTACT : +91 {user.contact}</p>
                </div>
                <div className="Empdetailstable">
                    <div className='salarystructure'>
                        <p style={{ fontWeight: "600", border: "1px solid black", borderBottom: "0" }}>Quantum AI</p>
                        <p style={{ border: "1px solid black", borderBottom: "0" }}>Salary Structure</p>
                    </div>
                    <div className='bankDetails'>
                        <div >
                            <p className='bids'>Emp. Name : {user.name}</p>
                            <p className='bids'>Account No : {user.acc_no}</p>
                        </div>
                        <div>
                            <p className='bids'>Bank Name : {user.bank_name}</p>
                            <p className='bids'>IFSC Code : {user.ifsc_code}</p>
                        </div>
                    </div>
                    <div className="earnDed">
                        <div className="earnings">
                            <p style={{ fontWeight: "600", border: "1px solid black", borderRight: "0" }}>Earnings</p>
                            <div className="earnitems">
                                <ul style={{ listStyle: "none", fontSize: ".9rem" }}>
                                    <div className='tableclass'>
                                        <li>Basic Salary </li>
                                        <p>: {user.basic_salary}</p>
                                    </div>
                                    <div className='tableclass'>
                                        <li>House Rent Allowances</li>
                                        <p>: {user.hra}</p>
                                    </div>
                                    <div className='tableclass'>
                                        <li>Conveynence Allowances</li>
                                        <p>: {user.conveniene_alloances}</p>
                                    </div>
                                    <div className='tableclass'>
                                        <li>Medical Allowances</li>
                                        <p>: {user.medical_alloances}</p>
                                    </div>
                                    <div className='tableclass'>
                                        <li>Special Allowances</li>
                                        <p>: {user.special_alloances}</p>
                                    </div>
                                    <div className='tableclass'>
                                        <li>Gross Salary</li>
                                        <p>: {user.gross}</p>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="deductions">
                            <p style={{ fontWeight: "600", border: "1px solid black" }}>Deductions</p>
                            <div className="deditems">
                                <ul style={{ listStyle: "none", fontSize: ".9rem" }}>
                                    <div className='tableclass'>
                                        <li>EPF</li>
                                        <p>: {user.epf}</p>
                                    </div>
                                    <div className='tableclass'>
                                        <li>Health Insurance</li>
                                        <p>: {user.health_insurance}</p>
                                    </div>
                                    <div className='tableclass'>
                                        <li>Professional Tax</li>
                                        <p>: {user.proffesional_tax}</p>
                                    </div>
                                    <div className='tableclass'>
                                        <li>TDS</li>
                                        <p>: {user.tds}</p>
                                    </div>
                                    <br></br>
                                    <div className='tableclass'>
                                        <li>Total Deduction</li>
                                        <p>: {user.deduct}</p>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='total'>
                        <p style={{ fontWeight: "600", border: "1px solid black", borderTop: "0", textAlign: "center", width: "40%", marginLeft: "10%" }}>Net Pay</p>
                        <div style={{ border: "1px solid black", borderTop: "0", borderLeft: "0", textAlign: "center", width: "40%" }}>
                            <p>{user.netpay}</p>
                        </div>
                    </div>
                    <div className='inwords'>
                        <p>Amount in words : {user.amtinwords}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
