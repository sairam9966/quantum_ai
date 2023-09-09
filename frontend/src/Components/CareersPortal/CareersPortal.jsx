import React from 'react'
import "./styles.css"
import CareersJobCard from '../CareersJobCard/CareersJobCard'

export default function CareersPortal() {
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
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>
            <CareersJobCard/>

        </div>
    </div>
  )
}
