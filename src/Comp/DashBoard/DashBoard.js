import React from 'react'
import { author } from '../../fbConfig'
import {signOut} from "firebase/auth"
import {useNavigate} from "react-router-dom"


const DashBoard = () => {
    const navigate=useNavigate()

    const logout=async()=>{
      await signOut(author)
      alert("user loggedout successfully!!")
      navigate("/login")
    }
  return (
    <div>
        welcome to dashboard

        <button onClick={logout}>Logout</button>
        <form>
            <input t/>
        </form>
      
    </div>
  )
}

export default DashBoard
