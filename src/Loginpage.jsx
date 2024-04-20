import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Logincss.css'
import RegisterPage from './RegisterPage'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Loginpage() {

  return (
    <div className='container  position-absolute '>
      {/* <img src="login-bg.png" alt="" /> */}
      <div className='col bg-inf container overflow-hidden d-none d-lg-flex '>
            <img src="firstimage.png" alt=""  width={650} height={500} className='image' /></div>

    <div className='col align-content-center d-flex  align-items-center justify-content-center bg-dar '> 
    <div className='logform w-50 bg-dange'>
      <Form>
      <Form.Group className="mb-3 " controlId="formGroupEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text"  placeholder="Enter a Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  placeholder="Password" />
      </Form.Group>  
    <div className='text-center bg-dar'>
    <Button variant="primary">Login</Button> <br /> 
    {/* <Link to="/products">Products</Link><br></br> */}
    <Link to="/register" className=' ' >Create a new account?</Link>
    </div>
    </Form>
    </div>
      </div>
    
    </div>
  
    
  
  )
}

export default Loginpage