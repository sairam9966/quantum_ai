import React, { useState } from 'react'

export default function JobDescription() {
    const [flag, setFlag] = useState(false)
    return (
        <div style={{ width: "100vw" }} className='jdHead'>
            <div style={{ overflowX: "hidden", padding: "1rem" }}>

                <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem" }}>
                    <h1 style={{ textAlign: "center" }}>Quantum AI Global</h1>
                    <h1 style={{ textAlign: "center", marginRight: "5rem" }}>Job Description</h1>
                    <h2 onClick={() => setFlag(true)} style={{ marginRight: "5rem", backgroundColor: "#215776", padding: ".3rem", color: "white", borderRadius: ".2rem", boxShadow: "10px 10px 10px rgba(0,0,0,0.5)" ,cursor:"pointer"}}>Apply</h2>

                </div>
                <div style={{ width: "100vw" }}>
                    <p style={{ marginTop: "1rem" }}> <span style={{ fontWeight: "600", }}>Division/Department :</span> <span>Software Engineering</span> </p>
                    <p style={{ marginTop: "1rem" }}> <span style={{ fontWeight: "600", }}>Locations : </span><span>Banglore,Chennai</span></p>
                    <p style={{ marginTop: "1rem" }}> <span style={{ fontWeight: "600", }}>Job Title : </span><span>React Developer</span></p>
                    <p style={{ fontWeight: "600", marginTop: "1rem", width: "90%" }}>Job Description :
                        <p style={{ fontWeight: "400", }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quos velit impedit accusamus explicabo, aperiam,
                        </p>
                    </p>
                    <p style={{ fontWeight: "600", marginTop: "1rem", width: "90%" }}>Skills and Experience :
                        <p style={{ fontWeight: "400", }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quos velit impedit accusamus explicabo, aperiam, facere placeat reprehenderit ducimus voluptates hic doloremque atque incidunt, iusto sunt nesciunt? At, eveniet perspiciatis.
                        </p>
                    </p>
                    <p style={{ fontWeight: "600", marginTop: "1rem", width: "90%" }}>Roles and Responsibilities :
                        <p style={{ fontWeight: "400", }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quos velit impedit accusamus explicabo, aperiam, facere placeat reprehenderit ducimus voluptates hic doloremque atque incidunt, iusto sunt nesciunt? At, eveniet perspiciatis.
                        </p>
                    </p>
                    <p style={{ fontWeight: "600", marginTop: "1rem", width: "90%" }}>Set yourself apart with :
                        <p style={{ fontWeight: "400", }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quos velit impedit accusamus explicabo, aperiam, facere placeat reprehenderit ducimus voluptates hic doloremque atque incidunt, iusto sunt nesciunt? At, eveniet perspiciatis.
                        </p>
                    </p>
                    <p style={{ fontWeight: "600", marginTop: "1rem", width: "90%" }}>Tips and additional information :
                        <p style={{ fontWeight: "400", }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quos velit impedit accusamus explicabo, aperiam, facere placeat reprehenderit ducimus voluptates hic doloremque atque incidunt, iusto sunt nesciunt? At, eveniet perspiciatis.
                        </p>
                    </p>
                </div>
            </div>
            {flag ? <JobForm setFlag={setFlag} /> : null}
        </div>
    )
}


const JobForm = (props) => {
    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "40vw", height: "80vh", backgroundColor: "rgba(255,255,255,1)", padding: "2rem",  boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",overflowX:"hidden" }}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 10"}}>
                <p style={{ width: "100%", color: "black",fontWeight:"800",fontSize:30 }}>Fill in your details</p>


                <p onClick={() => props.setFlag(false)} style={{ width: "100%", textAlign: "right", color: "black",cursor:"pointer" }}>Close</p>
                </div>
                <div style={{}}>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="firstname">First Name</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='firstname' name='firstname' placeholder='Enter your first  name' />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="lastname">Last Name</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='lastname' name='lastname' placeholder='Enter your last  name' />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="email">Email</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='email' name='email' placeholder='Enter your email address' />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="phone">Phone Number</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='phone' name='phone' placeholder='Enter your phone number' />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="firstname">Upload your Resume</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="file" id='Resume' name='Resume'  />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="coverletter">Cover Letter</label><br />
                        <textarea style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }}  id='coverletter' name='coverletter' placeholder='Enter your coverletter' />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="gender">Cover Letter</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='gender' name='gender' placeholder='Enter your gender' />
                    </div>      
                </div>

                <p style={{ marginTop:20,marginLeft:"20%", backgroundColor: "#215776", padding: ".3rem", color: "white", borderRadius: ".2rem", boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",width:"50%",textAlign:"center" }}>Submit</p>

            </div>

        </div>
    )
}