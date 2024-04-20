import React from 'react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Table } from 'react-bootstrap'

function DbtoUi() {
    
  const [data, setdata]=useState([])

  useEffect(()=>{
    axios.get(`http://localhost:1010/user/getdata`)
    .then((res)=>{
      console.log(res.data);
      setdata(res.data)
    })

  },[])
  return (
    <div><div>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Password</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((r)=>(
          <tr key={r.userId}>
        <td>{r.userId}</td>
        <td>{r.username}</td>
        <td>{r.phoneno}</td>
        <td>{r.email}</td>
        <td>{r.password}</td>
      </tr>
        ))
      }
    </tbody>
  </Table>

  </div></div>
  )
}

export default DbtoUi