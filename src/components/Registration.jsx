import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import action from '../actions/action';
import NavbarC from './NavbarC';

const Registration = () => {

  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [image, setImage] = useState("");

  let dispatch = useDispatch();


  let concat = fname.concat(' ', lname);
  const registrationBtn = () => {
    if (fname === "" || lname === "" || email === "" || password === "" || image === "") {
      console.log("Please Enter The Field");
    }
    else {
      console.log(concat);
      dispatch(action.createRegistration({
        name: concat,
        email: email,
        password: password,
        image: image
      }))
      setFname("");
      setLname("");
      setEmail("");
      setPassword("");
      setImage("");
    }
  }
  return (
    <>
      <NavbarC />
      <Container>
        <div className="d-flex justify-content-center align-items-center my-2" style={{ height: "90vh" }}>
          <Form className='bg-light rounded p-4 shadow-lg border border-dark' style={{ width: "450px" }}>
            <h1 className='text-center mb-4'>Registration</h1>
            <div className="d-flex justify-content-between">
              <Form.Group >
                <Form.Control type='text' placeholder='First Name' value={fname} onChange={(e) => setFname(e.target.value)} className='border-dark' style={{ width: "190px" }} ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control type='text' placeholder='Last Name' value={lname} onChange={(e) => setLname(e.target.value)} className='border-dark' style={{ width: "190px" }} ></Form.Control>
              </Form.Group>
            </div>
            <Form.Group className="my-3">
              <Form.Control type='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-dark' ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='border-dark' ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Control type='text' placeholder='Image' value={image} onChange={(e) => setImage(e.target.value)} className='border-dark' ></Form.Control>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="success" onClick={() => registrationBtn()} className='fw-bold my-3 rounded py-1 px-5'>Registration</Button>
            </div>
            <Link to="/Login" className="nav-link text-center text-info">
              <u>Already have an account?</u>
            </Link>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default Registration