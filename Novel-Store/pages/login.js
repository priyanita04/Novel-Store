import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Header from '../comp/Header/Header'
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async(e)=>{
    e.preventDefault();
    const config = {
      headers:{
        "Content-type" : "application/json"
      }
    }

    const {data} = await axios.post("http://localhost:9002/login", {email, password}, config);

    console.log(data);

  }
    return (
        <>
        <Header/>
        <Form className="loginContainer" onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{marginTop: "20px" }} >
            Submit
          </Button>
          <Row className="py-3 form_items">
          <Col>
          New Customer? <Link href="/register"><a>Register</a></Link>
          </Col>
        </Row>
        </Form>
      </>
    );
}

export default Login;