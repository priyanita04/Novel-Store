import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Header from '../comp/Header'
import axios from 'axios';
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
   const userInfo = localStorage.getItem("userInfo");

   if(userInfo)
   {
    router.push("/home")
   }
  }, [])

  const submitHandler = async(e)=>{
    e.preventDefault();
    try {
      const config = {
        headers:{
          "Content-type" : "application/json"
        }
      }


      const {data} = await axios.post("http://localhost:9002/api/users/login", {email, password}, config);
      const token = data.token;
      // console.log(token);
      localStorage.setItem('userInfo', JSON.stringify({email, password, token}))
      // router.push("/home")

    } catch (error) {
      console.log(error)
    }


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