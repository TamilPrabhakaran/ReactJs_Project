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

  const [usernamevalid, setusernamevalid] = useState(false);
  const [passwordvalid, setpasswordvalid] = useState(false);

  const [usernameerror, setusernameerror] = useState("");
  const [passworderror, setpassworderror] = useState("");

  const updatedata = (e) => {
    // const [name,value]=e.target;
    setlogdata({ ...logdata, [e.target.name]: e.target.value });
  };
  const savedata = (event) => {
    event.preventDefault();

    if (!logdata.username == "") {
      if (logdata.username.length >= 3) {
        setusernameerror("");
        setusernamevalid(true);
      } else {
        setusernameerror("Enter Minimum 3 Character");
      }
    } else {
      setusernameerror("Please Fill The Username");
    }

    const passwordPattern =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!logdata.password == "") {
      const ispassvalid = logdata.password.match(passwordPattern);
      if (ispassvalid) {
        setpassworderror("");
        setpasswordvalid(true);
      } else {
        setpassworderror(
          "password must be have one number, one captial letter, one small letter and one symbol, minimum 8 charactare"
        );
      }
    } else {
      setpassworderror("Please Enter The Password");
    }

    if (usernamevalid == true && passwordvalid == true) {
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
            navigate("/admin");
            setpassworderror("");
          } else {
            setpassworderror("Username or password is wrong!");
            console.log(logdata.username);
            console.log(logdata.password);
            
          }
        });
    }
  };

  return (
    <div className="container bg-dange d-flex justify-content-between h-100 mt-5 ">
      <div className=" d-none d-lg-flex   overflow-hidden p-5  ">
        <img src="/images/loginlogo.gif" alt="" width={350} height={300} />
      </div>
      <div className="col align-content-center d-flex  align-items-center justify-content-center bg-dar">
        <div className="logform shadow-lg h-100 px-5">
          <Form className=" w-100 " onSubmit={savedata}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={logdata.username}
                name="username"
                onChange={updatedata}
                placeholder="Enter a Name"
              />
              <span className=" text-danger fw-bold ">{usernameerror}</span>
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
              <span className=" text-danger fw-bold ">{passworderror}</span>
            </Form.Group>
            <div className="text-center bg-dar">
              <Button
                style={{
                  fontWeight: "bolder",
                  background: "#fc8019",
                  borderColor: "#fc8019",
                  borderRadius: "5px",
                }}
                type="submit"
              >
                LOGIN
              </Button>{" "}
              <br />
              {/* <Link to="/products">Products</Link><br></br> */}
              <Link
                to="/register"
                className=" "
                style={{
                  textDecoration: "none",
                  color: "#fc8019",
                  fontWeight: "bolder",
                }}
              >
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
