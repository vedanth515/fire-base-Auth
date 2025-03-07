import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { author ,db} from '../../fbConfig'
import {signInWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"
import { ref ,get} from 'firebase/database'
const Login = () => {
    const navigate=useNavigate()
    const [loginDetails, setloginDetails] = useState({
        email: "",
        password: ""
    })
    const handleLoginDetails = (e) => {
        setloginDetails({ ...loginDetails, [e.target.name]: e.target.value })
    }
    const handleSAubmitoOgin = async (e) => {
        const {email,password}=loginDetails;
        e.preventDefault()
        try {
const userCred=await signInWithEmailAndPassword(author,email,password)
// const 
console.log(userCred)
const loggediNpetrson=userCred.user.displayName;

const adminRef=ref(db,`admins/${loggediNpetrson}`)
const userRef=ref(db,`users/${loggediNpetrson}`)

const adminData=await get(adminRef)
const userData=await get(userRef)
console.log(adminData,"admin data")
console.log(userData,"user data")
// const adminRef=ref(db,`admins/${name}`)

if (adminData.exists()) {
    
   
    navigate("/dashboard", { state: { personData:adminData.val(), role: "admin" } });
  } else if (userData.exists()) {
    
  
    navigate("/dashboard", { state: { personData: userData.val(), role: "user" } });
  } else {
    alert("No signed-up user found");
  }
  
alert("loggedin successfully!!!")
// navigate("/dashboard",)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <Form onSubmit={handleSAubmitoOgin}>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name='email' onChange={handleLoginDetails} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' onChange={handleLoginDetails} />
                </Form.Group>
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    )
}

export default Login
