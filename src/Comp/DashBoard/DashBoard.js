import React, { useState } from 'react'
import { author,db } from '../../fbConfig'
import {set,ref,get} from "firebase/database"
import {signOut} from "firebase/auth"
import {useNavigate,useLocation} from "react-router-dom"
import { Form,Button } from 'react-bootstrap'
const DashBoard = () => {
  const [data,setData]=useState([])
  const [details,setDetails]=useState({
    title:"",
    imgUrl:"",
    instructions:""
  })
  const loc = useLocation();
  console.log("Received state in Dashboard:", loc.state);
  const loggedInPerson=loc.state.personData.name;
  const loggedInPersonRole=loc.state.role;
  console.log(loggedInPerson)


    const navigate=useNavigate()

    const logout=async()=>{
      await signOut(author)
      alert("user loggedout successfully!!")
      navigate("/login")
    }
    const handleSubmit=async(e)=>{
      const {title,imgUrl,instructions}=details;
      e.preventDefault()

      try{
       await set(ref(db,`${loggedInPersonRole}s/${loggedInPerson}/posts/${title}`),{
        title:title,
        imgUrl:imgUrl,
        instructions:instructions
       })
      }
      catch(err){
        console.log(err)
      }

    }
    const handleChange=(e)=>{
   setDetails({...details,[e.target.name]:e.target.value})
    }
    const hanldeGetData=async(e)=>{
      e.preventDefault()
      try{
       const allData=await get(ref(db,`${loggedInPersonRole}s/${loggedInPerson}/posts`))
       console.log(allData.val())
       const finlaData=Object.values(allData.val())
       console.log(finlaData)
       setData(finlaData)
      }
      catch(err){
        console.log(err)
      }

    }
  return (
    <div>
      {loggedInPerson}  welcome to dashboard
{/* <p>{personData}</p> */}
        <button onClick={logout}>Logout</button>
        <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={details.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>ImgUrl</Form.Label>
          <Form.Control
            type="text"
            name="imgUrl"
            value={details.imgUrl}
            onChange={handleChange}
          />
        </Form.Group>


        <Form.Group>
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            type="text"
            name="instructions"
            value={details.instructions}
            onChange={handleChange}
          />
        </Form.Group>


        {/* {error && <div className="alert alert-danger">{error}</div>} */}


        <Button className="bg-primary" type="submit">
          Post
        </Button>
        </Form>

<button onClick={hanldeGetData}>GetData</button>





{data.map(x=>{
  return(
    <div>
      <img src={x.imgUrl} width={300} />
    </div>
  )
})}
    </div>
  )
}

export default DashBoard
