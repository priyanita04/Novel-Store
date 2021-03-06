import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Header from '../comp/Header'
import ErrorMessage from '../comp/ErrorMessage';
import axios from 'axios'
import { useRouter } from 'next/router'

function register() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);


    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo")
        if(userInfo)
        {
            router.push("/login")
        }
    }, [])

    const submitHandler = async(e) =>{
        e.preventDefault();
        if(email && name && password===confirmPassword)
        {
            //login
            const config = {
                headers:{
                    "Content-type": "application/json"
                }
            }

            const {data} = await axios.post("http://localhost:9002/api/users", {name, email, password}, config)
            const username = data.name;
            const token = data.token;
            const id = data._id;
            localStorage.setItem('userInfo', JSON.stringify({username, id, token}))
            // console.log("data would be", data)
            router.push("/home")
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
