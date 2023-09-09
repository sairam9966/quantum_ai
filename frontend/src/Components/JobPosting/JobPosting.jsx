import React, { useState } from 'react'

export default function JobPosting() {
    return (
        <div style={{ width: "100vw" }} className='jdHead'>
            <div style={{ overflowX: "hidden", padding: "1rem" }}>

                <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem" }}>
                    <h1 style={{ textAlign: "center" }}>Quantum AI Global</h1>
                    <h1 style={{ textAlign: "center", marginRight: "5rem" }}>Job Posting</h1>
                    <h2  style={{ marginRight: "5rem", backgroundColor: "#215776", padding: ".3rem", color: "white", borderRadius: ".2rem", boxShadow: "10px 10px 10px rgba(0,0,0,0.5)" ,cursor:"pointer"}}>Submit</h2>

                </div>
                <div style={{ width: "100vw" }}>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="dept">Division/Department</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='dept' name='dept' placeholder='Enter the division for the role' />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="locations">Job Location(s)</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='locations' name='locations' placeholder='Enter the job locations for the role' />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="title">Job title</label><br />
                        <input style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }} type="text" id='title' name='title' placeholder='Enter the job title for the role' />
                    </div>

                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="jobDescription">Job Description</label><br />
                        <textarea style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }}  id='jobDescription' name='jobDescription' placeholder='Enter the Job Description' />
                    </div>

                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="skillsandexperience">Skills and Experience</label><br />
                        <textarea style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }}  id='skillsandexperience' name='skillsandexperience' placeholder='Enter the Skills and Experience' />
                    </div>

                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="rolesAndResponsibilities">Roles and Responsibilities</label><br />
                        <textarea style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }}  id='rolesAndResponsibilities' name='rolesAndResponsibilities' placeholder='Enter the Roles and Responsibilities' />
                    </div>

                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="setapartWith">Set apart with</label><br />
                        <textarea style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }}  id='setapartWith' name='setapartWith' placeholder='Enter the ways in which the candidate can set themseleves apart with' />
                    </div>

                    <div style={{ marginTop: 10 }}>
                        <label style={{}} htmlFor="addInfo">Tips and additional Information</label><br />
                        <textarea style={{ marginTop: 10, width: "90%", backgroundColor: "lightgrey", padding: ".5rem", color: "black" }}  id='addInfo' name='addInfo' placeholder='Enter the tips and additional information' />
                    </div>

                
                </div>
            </div>
        </div>
    )
}