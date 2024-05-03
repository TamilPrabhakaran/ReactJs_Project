import React from "react";
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RegisterPage from "./RegisterPage";

function Adminpage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1010/user/getdata`).then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Phone No</th>
                <th>E-Mail</th>
                <th>Password</th>
              
              </tr>
            </thead>
            <tbody>
              {data.map((r) => (
                <tr key={r.userId}>
                  <td>{r.userId}</td>
                  <td>{r.username}</td>
                  <td>{r.phoneno}</td>
                  <td>{r.email}</td>
                  <td>{r.password}</td>
                  <td>
                  <Button variant="primary" onClick={handleShow}>  View </Button>
                  <Button variant="warning" onClick={handleShow}>  Edit </Button>
                  <Button variant="danger" onClick={handleShow}>  Delete </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <RegisterPage></RegisterPage>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Adminpage;
