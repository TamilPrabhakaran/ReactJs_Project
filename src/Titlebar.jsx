import React from 'react'
import './titlebarcss.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { BsSearch } from "react-icons/bs"
import { BiSolidOffer } from "react-icons/bi";
import { SlUser } from "react-icons/sl";
import { GrCart } from "react-icons/gr";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Form from 'react-bootstrap/Form'
import { NavbarCollapse } from 'react-bootstrap'
function Titlebar() {
    // const [open, setopen]=useState(false)
    // const handclick=()=>setopen(!open)
    // const closeMenu=()=>setopen(false)
  return (
    <Navbar expand="lg" className="nav-head" sticky="top" >
    <Container className='bg-dange'>

      <Navbar.Brand href="#">
      <Link to='/'> <img src="./images/foodlogo.jpg" alt="" width={70} height={70} className="d-inline-block"/></Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

        <Nav className="title-bar ms-auto bg-inf" >
  
        <Nav.Item>  
        <Link to='/search'className='nav-link' ><BsSearch></BsSearch> Search</Link>
        </Nav.Item>

        <Nav.Item>
        <Link to='/offer' className='nav-link'><BiSolidOffer /> Offer</Link>
        </Nav.Item>

        <Nav.Item>
        <Link to='/login'className='nav-link' ><SlUser /> Sign In</Link>
        </Nav.Item>

        <Nav.Item>
         <Link to='/cart' className='nav-link'><GrCart /> Cart</Link>
        </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
    
    //   <Nav className="title-bar">
    //     <Link to='/'> <img src="./images/foodlogo.jpg" alt="" width={70} height={70} className="d-inline-block align-top"/></Link>
    //   <div className='nav-icon' onClick={handclick}>
    //     { open ? <FiX /> : <FiMenu />}
    //   </div>
    //     <ul className= { open ? 'nav-links-active' : 'nav-links'} >
    //         <li className='nav-list' onClick={closeMenu}>
    //             <Link to='/search'className='nav-link' ><BsSearch></BsSearch> Search</Link>
    //         </li>
    //         <li className='nav-list' onClick={closeMenu}>
    //         <Link to='/offer' className='nav-link' ><BiSolidOffer /> Offer</Link>

    //         </li>
    //         <li className='nav-list' onClick={closeMenu}>
    //         <Link to='/login'className='nav-link' ><SlUser /> Sign In</Link>

    //         </li>
    //         <li className='nav-list' onClick={closeMenu}>
    //         <Link to='/cart' className='nav-link'><GrCart /> Cart</Link>
    //         </li>
    //     </ul>
    // </Nav>

      
  )
}

export default Titlebar