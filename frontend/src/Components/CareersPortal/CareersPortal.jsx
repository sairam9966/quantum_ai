import React ,{useState,useEffect}from 'react'
import "./styles.css"
import CareersJobCard from '../CareersJobCard/CareersJobCard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function CareersPortal() {
    const navigate=useNavigate();
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        const getJobs = ()=>{
          axios.get(`http://localhost:5000/api/jobs`).then((res)=>{
            console.log(res.data)
            setJobs(res.data)
          })
        }
        getJobs();
      },[])
  return (
    <div style={{overflowX:"hidden"}}>
        <div className='careersTopContainer'>
            <div className='careersNavBar'>
                <h1 style={{float:"left",fontSize:"3rem"}}>Careers Portal</h1>
                <ul className='careersNavList'>
                    <li className='careersNavItem'>Home</li>
                    <li className='careersNavItem'>About</li>
                </ul>
            </div>
            <div className='careersSearchContainer'>
                <p className='welcomeCareerHead'>Welcome</p>
                <div className='careersSearchInnerContainer'>
                    <input type="text" name="searchbar" placeholder='Search by job title' className='careersSearchContainer' />
                    <p className='searchBtn'>Search</p>
                </div>
            </div>
        </div>
        <div className='careersjobCardsContainer'>
            {/* <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/> */}
            {
          jobs?.map((job)=>{
            return(
              <CareersJobCard  key={job.id} job={job}/>
            )

          })
        }
        </div>
    </div>
  )
}
