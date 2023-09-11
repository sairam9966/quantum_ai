import React, { useState } from 'react'
import "../Login/styles.css"
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Login() {
  const [email,setEmail]  = useState()
  const [password,setPassword]  = useState()
  const navigate = useNavigate()

  const handleLogin = () => {
    axios.post("http://localhost:5000/api/employee/login",{email:email,password:password}).then((response) => {
      
      const level=response.data.level;
      const id=response.data._id;
      if(level==1){
      navigate(`/user/home/${id}`);
      }
      else{
        navigate('/home');
      }
    }).catch(err=>console.log(err))
  }  

  return (
    <div >
      <div className='bgimage'  >
        <div className="mainContainer">

          <div className='header'>
            <Header/>
          </div>
          <div className='innerContainer'>
            <div className='companyHead'>
              <p className='headTitle'>Quantum AI</p>
              <p className='headContent'>
                <p>Welcome to the </p>
                <p>era of Redefining</p>
                <p> Reality</p></p>

            </div>
            <div className='loginContainer'>
              <div className ='loginForm'>
              <form action="">
                <div className ='formHead'>
                  <p>LOGIN</p>
                </div>
                {/* <div className ='formInput'>
                  <input  type="radio" id="Admin" name="loginUser" value="Admin" checked />
                  <label className='radioLabel' htmlFor="Admin">Admin</label>

                  <br/>

                  <input type="radio" id="Employee" name="loginUser" value="Employee"/>
                  <label className='radioLabel' htmlFor="Employee">Employee</label>
                </div> */}
                <div className='credentials'>
                  <label htmlFor ="email">Email</label>
                  <br></br>
                  <input onChange={(e)=>setEmail(e.target.value)} className='loginInpts' type="text" placeholder="Enter your email" name="email"></input>
                  
                  <label htmlFor ="password">Password</label>
                  <br></br>
                  <input onChange={(e)=>setPassword(e.target.value)} className='loginInpts' type="password"  placeholder="Enter your password" name="password"></input>
                  <br></br>
                  <br></br>
                  <button onClick={()=>{
                    handleLogin();
                    // navigate("/home",);
                  }} className='submitBtn' type="button">Submit</button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
