import React, { useEffect, useState } from 'react'
import SignUp from './Comp/SignUp/SignUp'
import Login from './Comp/Login/Login'
import Navbar from './Comp/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './Comp/DashBoard/DashBoard'
import {Navigate} from "react-router-dom"
import {onAuthStateChanged} from "firebase/auth"
import { author } from './fbConfig'
const App = () => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
        const userLoggedIn=   onAuthStateChanged(author,(currentUser)=>{
 setUser(currentUser)
 setLoading(false)

           })

           return ()=>userLoggedIn()
  },[])


  console.log(user)
  if(loading){
    return <h1>Loadig pls wait a moment</h1>
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={user ? <DashBoard />: <Navigate to="/login"/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
