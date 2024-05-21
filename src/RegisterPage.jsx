import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./registercss.css";
import axios from "axios";
function RegisterPage() {
  const [validate, setvalidate] = useState("");

  const [userdata, setuserdata] = useState({
    username: "",
    phoneno: "",
    email: "",
    password: "",
  });

  const [usernamevalid, setusernamevalid] = useState(false);
  const [moblievalid, setmoblievalid] = useState(false);
  const [emailvalid, setemailvalid] = useState(false);
  const [passwordvalid, setpasswordvalid] = useState(false);

  const [usernameerror, setusernameerror] = useState("");
  const [moblieerror, setmoblieerror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");

  const changes = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if (!userdata.username == "") {
      if (userdata.username.length >= 3) {
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
    if (!userdata.password == "") {
      const ispassvalid = userdata.password.match(passwordPattern);
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
    
    const emailPattern = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;
    if (!userdata.email == " ") {
      const isemailvalid = userdata.email.match(emailPattern);
      if (isemailvalid) {
        setemailerror("");
        setemailvalid(true);
      } else {
        setemailerror("Enter a Correct Email");
      }
    } else {
      setemailerror("Please Enter a Email");
    }
    if (!userdata.phoneno == "") {
      if (userdata.phoneno.length == 10) {
        setmoblievalid(true);
        setmoblieerror("");
      } else {
        setmoblieerror("Mobile no only have 10 digits");
      }
    } else {
      setmoblieerror("Please Fill The mobile no");
    }

    if (
      usernamevalid == true &&
      moblievalid == true &&
      emailvalid == true &&
      passwordvalid == true
    ) {
      axios
        .post("http://localhost:1010/user/add", userdata)
        .then((res) => {
          console.log(res);
          console.log(userdata);
        })
        .catch((err) => {
          console.log(err);
        });
      setuserdata({
        ...userdata,
        username: "",
        phoneno: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="container bg-succes mt-5 p-3  ">
      {/* <img src="login-bg.png" alt="" /> */}
      <div className="col  bg-inf container d-none d-lg-flex  overflow-hidden p-5 ">
        <img
          src="/images/loginlogo.gif"
          alt=""
          srcset=""
          width={350}
          height={300}
        />
      </div>

      <div className="col align-content-center d-flex align-items-center justify-content-center bg-dar ">
        <div className="regform  bg-dange shadow-lg w-100 p-5 pb-2  ">
          <Form onSubmit={formSubmit} className=" w-100 ">
            <Form.Group className="mb-3 " controlId="formGroupEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={userdata.username}
                onChange={changes}
              />
              <span className=" text-danger fw-bold ">{usernameerror}</span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>PhoneNo</Form.Label>
              <Form.Control
                type="number"
                placeholder="PhoneNo"
                name="phoneno"
                value={userdata.phoneno}
                onChange={changes}
              />
              <span className=" text-danger fw-bold ">{moblieerror}</span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
                type="text"
                placeholder="E-Mail"
                name="email"
                value={userdata.email}
                onChange={changes}
              />
              <span className=" text-danger fw-bold ">{emailerror}</span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={userdata.password}
                onChange={changes}
              />
              <span className=" text-danger fw-bold ">{passworderror}</span>
            </Form.Group>
            <div className="text-center bg-dange">
              <Button
                style={{
                  fontWeight: "bolder",
                  background: "#fc8019",
                  borderColor: "#fc8019",
                  borderRadius: "5px",
                }}
                type="submit"
              >
                SUBMIT
              </Button>{" "}
              <br />
              <Link to="/login" className=" "
              style={{
                textDecoration: "none",
                color: "#fc8019",
                fontWeight: "bold"
              }}
              >
                Signup?
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
