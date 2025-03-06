// import React, { useState } from 'react'
// import { Form, Button } from "react-bootstrap"
// import { createUserWithEmailAndPassword } from "firebase/auth"
// import { author,db } from '../../fbConfig'
// import {set,ref} from "firebase/database"
// const SignUp = () => {
//     const [sigNupDetails, setSignUpDetails] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })
//     const handleDetails = (e) => {
//         setSignUpDetails({ ...sigNupDetails, [e.target.name]: e.target.value })
//     }
//     const handleSubmitSignup = async (e) => {
//         e.preventDefault()
//         const { name, email, password } = sigNupDetails;

//         try {
//             await createUserWithEmailAndPassword(author, email, password)
//             alert("signup dome successfully!!!")
           
//         }
//         catch (err) {
//             console.log(err)
//         }

//     }
//     return (
//         <div>
//             <Form onSubmit={handleSubmitSignup}>
//                 <Form.Group>
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control type='text' name='name' onChange={handleDetails} />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control type='email' name='email' onChange={handleDetails} />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type='password' name='password' onChange={handleDetails} />
//                 </Form.Group>
//                 <Button type='submit'>SignUp</Button>
//             </Form>
//         </div>
//     )
// }

// export default SignUp




import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { author,db } from '../../fbConfig'
import {set,ref} from "firebase/database"
const SignUp = () => {
    const [sigNupDetails, setSignUpDetails] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleDetails = (e) => {
        setSignUpDetails({ ...sigNupDetails, [e.target.name]: e.target.value })
    }
    const handleSubmitSignup = async (e) => {
        e.preventDefault()
        const { name, email, password } = sigNupDetails;

        try {
           const signupUser= await createUserWithEmailAndPassword(author, email, password)
           console.log(signupUser)
            alert("signup dome successfully!!!")
            await set(ref(db,"users/"+name),{
                name:name,
                email:email,
                 id:signupUser.user.uid,
            })
        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <div>
            <Form onSubmit={handleSubmitSignup}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' name='name' onChange={handleDetails} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name='email' onChange={handleDetails} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' onChange={handleDetails} />
                </Form.Group>
                <Button type='submit'>SignUp</Button>
            </Form>
        </div>
    )
}

export default SignUp

