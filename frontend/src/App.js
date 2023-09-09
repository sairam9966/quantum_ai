import React, { useEffect, useState } from 'react'
import Login from "./Components/Login/Login"
import Home from './Components/Home/Home'

import axios from "axios"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CareersPortal from './Components/CareersPortal/CareersPortal'
import JobDescription from './Components/JobDescription/JobDescription'
import ApplicationDetails from './Components/ApplicationDetails/ApplicationDetails'
import JobPosting from './Components/JobPosting/JobPosting'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' Component={Home}/>
        <Route path='/' Component={Login}/>
        <Route path='/login' Component={Login}/>
        <Route path='/careers' Component={CareersPortal}/>
        <Route path='/jobs' Component={JobPosting}/>
        <Route path='/applications' Component={ApplicationDetails}/>




      </Routes>
    </BrowserRouter>
  )
}
