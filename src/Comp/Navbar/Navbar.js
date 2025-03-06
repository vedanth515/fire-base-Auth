import React from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from "react-router-dom"
const Navbar = () => {
    const naviagte=useNavigate()
  return (
    <div>
        <Button onClick={()=>naviagte("/signup")}>SignUp</Button>
        <Button onClick={()=>naviagte("/login")}>Login</Button>
      
    </div>
  )
}

export default Navbar
