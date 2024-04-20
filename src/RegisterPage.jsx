import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './registercss.css'
import axios from 'axios'
function RegisterPage() {

  const[userdata, setuserdata]=useState({ })

 const changes=(e)=>{
  setuserdata({...userdata,[e.target.name]:e.target.value})
  console.log(userdata);
 }

 const formSubmit=(event)=>{

  event.preventDefault()

  axios.post("http://localhost:1010/user/add", userdata)
  .then((res)=>{
    console.log(res)
    console.log(userdata);
  })
  .catch((err)=>{
    console.log(err);
  })
  
 }
  
  return (
    <div className='container position-absolute '>
    {/* <img src="login-bg.png" alt="" /> */}
    <div className='col  bg-inf container2 d-none d-lg-flex   overflow-hidden '><img src="firstimage.png" alt="" srcset="" width={650} height={500} className='image' /></div>

  <div className='col align-content-center d-flex align-items-center justify-content-center bg-dar '> 
    <div className='regform w-75 bg-dange   '>
    <Form onSubmit={formSubmit}>
    <Form.Group className="mb-3 " controlId="formGroupEmail">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Username" name='username' value={userdata.Username} onChange={changes} />
    </Form.Group><Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>PhoneNo</Form.Label>
      <Form.Control type="number" placeholder="PhoneNo" name='phoneno'value={userdata.Phoneno} onChange={changes}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>E-Mail</Form.Label>
      <Form.Control type="email" placeholder="E-Mail" name='email' value={userdata.Email} onChange={changes} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name='password' value={userdata.password} onChange={changes}/>
    </Form.Group>
    <div className='text-center bg-dange' >

    <Button variant="primary" type='submit' >Submit</Button>  <br /><Link to="/" className=' ' >Signup?</Link>
</div>
  </Form>
    </div>
  
  </div>
  
  </div>
  )
}

export default RegisterPage