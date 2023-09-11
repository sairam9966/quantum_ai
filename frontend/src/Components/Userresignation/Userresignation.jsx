import React,{useState} from 'react'
import Load from '../../Assets/sand-clock.jpeg'
import "./styles.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Userresignation(props) {
    const navigate=useNavigate();
     const emp=props.emp;
    const [formData,setFormData]=useState({
         name:emp.name,
         role:emp.position,
         phone_number:emp.contact,
         email:emp.email,
         letter:''

    })
    const inputHandler = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const dataSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        console.log(emp.id);
          const postResign = ()=>{
            axios.post(`http://localhost:5000/api/employee/applyResignation/${emp.id}`,formData).then((res)=>{
                
             alert('form submitted');
              navigate(`/user/home/${emp.id}`);
            })
          }
          postResign();
        
      }
    return (
        <div>
            <div className="status">
                <div>
                    <p>Status:</p>
                    <p style={{ color: "#76214A", fontSize: "1rem", fontWeight: "700" }}>Pending</p>
                </div>
                <div>
                    <img src={Load} alt="" style={{ width: "30px", height: "30px", margin: "5px" }} />
                </div>
            </div>
            <div>
                <p style={{fontSize:"1.5rem", fontWeight:"600", paddingLeft:"1rem"}}>Resignation Request</p>
                <div className='resignationdetails'>
                    <div className='resignationdetails1'>
                        <div className='rddetails'>
                            <p>Name : </p>
                            <input type="text" id="name" name="name" value={emp.name} className='resignipt' placeholder='Name'  onChange={inputHandler}/>
                        </div>
                        <div className='rddetails'>
                            <p>Role : </p>
                            <input type="text" id="name" name="position" value={emp.position} className='resignipt' placeholder='role' onChange={inputHandler} />
                        </div>
                       
                    </div>
                    <div className='resignationdetails1'>
                        <div className='rddetails'>
                            <p>Contact Number : </p>
                            <input type="text" id="name" name="contact" className='resignipt' value={emp.contact} placeholder='phone_number' onChange={inputHandler}/>
                        </div>
                    
                        <div className='rddetails'>
                            <p>Email : </p>
                            <input type="text" id="name" name="email" className='resignipt' value={emp.email}placeholder='email' onChange={inputHandler} />
                        </div>
                    </div>    
                </div>
                <div className='letter'>
                    <p>Enter Letter : </p>
                    <textarea id="resignletter" name="letter" rows="4" cols="50" placeholder='Enter text' className='resignletter' onChange={inputHandler}></textarea>
                </div>
                <div style={{textAlign:'center'}}>
                    <input type='submit' style={{backgroundColor:"#3A8846", color:"white", padding:".5rem",width:"10%", borderRadius:"40px"}} onClick={dataSubmit}/>
                </div>
                
            </div>
        </div>
    )
}
 