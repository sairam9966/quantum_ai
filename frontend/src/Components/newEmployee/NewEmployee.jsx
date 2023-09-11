import React, { useEffect,useState } from 'react'
import './styles.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function NewEmployee() {
  const [formdata, setFormdata] = useState({})
  const navigate=useNavigate();
  const inputHandler = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const dataSubmit = (e) => {
    e.preventDefault()
    console.log(formdata);
      const newEmployee = ()=>{
        axios.post(`http://localhost:5000/api/createEmployee`,formdata).then((res)=>{
          console.log(res.data);
          navigate('/home');
        })
      }
      newEmployee();
  }

  return (
    <div className='formbg'>
      <form className='EmpForm' onSubmit={dataSubmit}>
        <div className='empDetails'>
          <h1 style={{ color: "#215776", fontSize: "1.5rem", padding: "1.5rem" }}>New Employee Details:</h1>
          <div>
            <img 
            style={{width:"10vw", height:'20vh', borderRadius:"50%" , objectFit:"cover"}}
            src={formdata.profileimg ? formdata.profileimg : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" />
          </div>
          <div className="imgupload">
            <input type='file' id='profile' name='profileimg' onChange={inputHandler} style={{}}/>
            
          </div>
          <label htmlFor="profile" style={{display:"none"}}></label>
          {/* <label className='inputLabels' for="Ename" style={{ color: "#76214A", fontSize: "1.5rem", fontWeight: "700" }}>Name:
            <input type="text" id="Ename" name="Ename" className='inputfield' onChange={inputHandler}/>
          </label> */}
          <div className='inpt'>
            <label className='inputLabels' for="Startdate">START DATE </label>
            <label> :</label>
            <input type="date" id="startdate" name="start_date" className='inputfield' placeholder='start date' onChange={inputHandler} />
          </div>
          <div className='inpt'>
            <label className='inputLabels' for="password">PASSWORD </label>
            <label> :</label>
            <input type="text" id="password" name="password" className='inputfield' placeholder='password' onChange={inputHandler} />
          </div>
          <div className='inpt'>
            <label className='inputLabels' for="position">POSITION </label>
            <label> :</label>
            <input type="text" id="position" name="position" className='inputfield' placeholder='position' onChange={inputHandler} />
          </div>
          <div className='inpt'>
            <label className='inputLabels' for="location">LOCATION </label>
            <label> :</label>
            <input type="text" id="location" name="location" className='inputfield' placeholder='location' onChange={inputHandler} />
          </div>
          <div className='inpt'>
            <label className='inputLabels' for="age">AGE </label>
            <label> :</label>
            <input type="text" id="age" name="age" className='inputfield' placeholder='age' onChange={inputHandler} />
          </div>
          <div className='inpt'>
            <label className='inputLabels' for="email">EMAIL </label>
            <label> :</label>
            <input type="text" id="email" name="email" className='inputfield' placeholder='email' onChange={inputHandler} />
          </div>
          <div className='inpt'>
            <label className='inputLabels' for="personal_email">PERSONAL EMAIL </label>
            <label> :</label>
            <input type="text" id="personal_email" name="personal_email" className='inputfield' placeholder='personal email' onChange={inputHandler} />
          </div>
          <div className='inpt'>
            <label className='inputLabels' for="contack">CONTACT </label>
            <label> :</label>
            <input type="text" id="contact" name="contact" className='inputfield' placeholder='contact' onChange={inputHandler} />
          </div>
        </div>

        <div className='form2'>
          <div className='salarystructure'>
            <p style={{ fontWeight: "600", border: "1px solid black", borderBottom: "0" }}>Quantum AI</p>
            <p style={{ border: "1px solid black", borderBottom: "0" }}>Salary Structure</p>
          </div>
          <div className='bankDetails'>
            <div >
              <p className='bids'>EMPLOYEE NAME:
                <input type="text" id="empname" name="name" className='inputfield3' placeholder='Emp. Name' onChange={inputHandler} />
              </p>
              <p className='bids'>Account No :
                <input type="text" id="accno" name="acc_no" className='inputfield3' placeholder='Account No.' onChange={inputHandler} />
              </p>
            </div>
            <div>
              <p className='bids'>Bank Name :
                <input type="text" id="bankname" name="bank_name" className='inputfield3' placeholder='Bank name' onChange={inputHandler} />
              </p>
              <p className='bids'>IFSC Code :
                <input type="text" id="ifsc" name="ifsc_code" className='inputfield3' placeholder='IFSC code' onChange={inputHandler} />
              </p>
            </div>
          </div>
          <div className="earnDed">
            <div className="earnings">
              <p style={{ fontWeight: "600", border: "1px solid black", borderRight: "0" }}>Earnings</p>
              <div className="earnitems">
                <ul style={{ listStyle: "none", fontSize: ".9rem" }}>
                  <div className='tableclass'>
                    <li>Basic Salary </li>
                    <p>:</p>
                    <input type="text" id="basicsalary" name="basic_salary" className='inputfield2' placeholder='basic salary' onChange={inputHandler} />
                  </div>
                  <div  className='tableclass'>
                    <li>House Rent Allowances</li>
                    <p>:</p>
                    <input type="text" id="houserent" name="hra" className='inputfield2' placeholder='House rent' onChange={inputHandler} /> 
                  </div>
                  <div  className='tableclass'>
                    <li>Conveynence Allowances</li>
                    <p>:</p>
                    <input type="text" id="conveynence" name="conveniene_alloances" className='inputfield2' placeholder='Conveynence' onChange={inputHandler} /> 
                  </div>
                  <div  className='tableclass'>
                    <li>Medical Allowances</li>
                    <p>:</p>
                    <input type="text" id="medical" name="medical_alloances" className='inputfield2' placeholder='Medical' onChange={inputHandler} /> 
                  </div>
                  <div  className='tableclass'>
                    <li>Special Allowances</li>
                    <p>:</p>
                    <input type="text" id="special" name="special_alloances" className='inputfield2' placeholder='Special' onChange={inputHandler} /> 
                  </div>
                  <div  className='tableclass'>
                    <li>Gross Salary</li>
                    <p>:</p>
                    <input type="text" id="gross" name="gross" className='inputfield2' placeholder='Gross Salary' onChange={inputHandler} />
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
                    <p>:</p>
                    <input type="text" id="epf" name="epf" className='inputfield2' placeholder='EPF' onChange={inputHandler} /> 
                  </div>
                  <div className='tableclass'>
                    <li>Health Insurance</li>
                    <p>:</p>
                    <input type="text" id="healthins" name="health_insurance" className='inputfield2' placeholder='Health ins.' onChange={inputHandler} /> 
                  </div>
                  <div className='tableclass'>
                    <li>Professional Tax</li>
                    <p>:</p>
                    <input type="text" id="ptax" name="proffesional_tax" className='inputfield2' placeholder='prof. tax' onChange={inputHandler} /> 
                  </div>
                  <div className='tableclass'>
                    <li>TDS</li>
                    <p>:</p>
                    <input type="text" id="tds" name="tds" className='inputfield2' placeholder='TDS' onChange={inputHandler} /> 
                  </div>
                  <br></br>
                  <div className='tableclass'>
                    <li>Total Deduction</li>
                    <p>:</p>
                    <input type="text" id="deduct" name="deduct" className='inputfield2' placeholder='total' onChange={inputHandler} /> 
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className='total'>
            <p style={{ fontWeight: "600", border: "1px solid black", borderTop: "0", textAlign: "center", width: "40%", marginLeft: "10%" }}>Net Pay</p>
            <div style={{ border: "1px solid black", borderTop: "0", borderLeft: "0", textAlign: "center", width: "40%" }}>
              <input type="text" id="netpay" name="netpay" className='inputfield2' placeholder='Net pay' onChange={inputHandler} />
            </div>
          </div>
          <div className='inwords'>
            <p>Amount in words : </p>
            <input type="text" id="amtinwords" name="amtinwords" className='inputfield2' style={{ width: "60%", marginLeft: "5%", marginTop: "3px" }} placeholder='Enter amount in words' onChange={inputHandler} />
          </div>
          <div>
            <input type='submit' className='button' style={{ marginLeft: '70%', marginTop: '1rem' }} />
          </div>
        </div>
      </form>
    </div>
  )
}
