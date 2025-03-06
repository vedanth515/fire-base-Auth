import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { author } from '../../fbConfig'
import {signInWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"
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
await signInWithEmailAndPassword(author,email,password)
alert("loggedin successfully!!!")
navigate("/dashboard")
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
