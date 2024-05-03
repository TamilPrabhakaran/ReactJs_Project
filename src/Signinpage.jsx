import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Logincss.css";

function Signinpage() {
  document.title = "Login";

  const navigate = useNavigate();

  const [logdata, setlogdata] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");

  const updatedata = (e) => {
    // const [name,value]=e.target;
    setlogdata({ ...logdata, [e.target.name]: e.target.value });
  };
  const savedata = () => {
    axios
      .get(
        `http://localhost:1010/user/get/${logdata.username}/${logdata.password}`
      )
      .then((res) => {
        console.log(res.data);
        if (
          logdata.username == res.data.username &&
          logdata.password == res.data.password
        ) {
          navigate("/");
          setLoginError("");  
        } else {
          setLoginError("Username or password is wrong!");
        }
      });
  };

  return (
    <div className="container bg-danger d-flex justify-content-between h-100 ">
      <div className=" d-none d-lg-flex   overflow-hidden p-5  ">
        <img src="/images/loginlogo.gif" alt="" width={350} height={300} />
      </div>
      <div className="col align-content-center d-flex  align-items-center justify-content-center bg-dar">
        <div className="logform">
          <Form>
            <Form.Group className="mb-3 " controlId="formGroupEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={logdata.username}
                name="username"
                onChange={updatedata}
                placeholder="Enter a Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={logdata.password}
                name="password"
                onChange={updatedata}
                placeholder="Password"
              />
            </Form.Group>
            <div className="text-center bg-dar">
              <Button variant="primary" onClick={savedata}>
                Login
              </Button>{" "}
              <br />
              {/* <Link to="/products">Products</Link><br></br> */}
              <Link to="/register" className=" ">
                Create a new account?
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Signinpage;
