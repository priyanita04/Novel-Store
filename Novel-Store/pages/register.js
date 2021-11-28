import React, { useState } from 'react'
import Link from 'next/link'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Header from '../comp/Header/Header'
import ErrorMessage from '../comp/ErrorMessage';
import axios from 'axios'

function register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);

    const submitHandler = async(e) =>{
        e.preventDefault();
        if(password===confirmPassword)
        {
            //login
            const config = {
                headers:{
                    "Content-type": "application/json"
                }
            }
            const {data} = await axios.post("http://localhost:9002/register", {name, email, password}, config)

            console.log(data)
        }
        else
        {
            setMessage("Password does not match")
            console.log('cannot login')
        }

    }
    return (
        <>
            <Header/>
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            <Form className="loginContainer" onSubmit={submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            value={name}
                            placeholder="Enter name"
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
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

                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>



                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        Have an Account ?<Link href="/login"><a>Login</a></Link>
                    </Col>
                </Row>
        </>
    )
}

export default register
