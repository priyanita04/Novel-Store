import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Header from '../comp/Header'
import { useRouter } from 'next/router'
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap'

const Home = () => {

  const [bookName, setBookName] = useState("")
  const [price, setPrice] = useState("")
  const [detail, setDetail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")

  const resetHandler = ()=>{
    setBookName("");
    setPrice("");
    setDetail("");
    setAddress("");
    setCity("");
    setState("");
    setZip("");
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    if(!bookName || !price || !detail || !address || !city || !state || !zip) return;
    //create new book detail to db
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    }
    const {data} = await axios.post("http://localhost:9002/home",
      {bookName, price, detail, address, city, state, zip},
      config
    )

    resetHandler();
  }


  return (
    <>
      <Head>
        <title>Novel Store | Home</title>
      </Head>

      <Header/>
      <Form className="loginContainer" onSubmit={submitHandler}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="name">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="name"
              value={bookName}
              placeholder="Enter Book name"
              onChange={(e)=>setBookName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              placeholder="Price of book"
              onChange={(e)=>setPrice(e.target.value)}/>
          </Form.Group>
        </Row>



        <FloatingLabel controlId="floatingTextarea2">
        <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            value={detail}
            placeholder="Please write some details"
            onChange={(e)=>setDetail(e.target.value)}
            style={{ height: '100px' }}
          />
        </FloatingLabel>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            placeholder="Apartment, studio, or floor"
            onChange={(e)=>setAddress(e.target.value)} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e)=>setCity(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              value={state}
              onChange={(e)=>setState(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              value={zip}
              onChange={(e)=>setZip(e.target.value)}/>
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Categoty</Form.Label>

            <Form.Select >
              <option>Choose Categoty</option>
              <option>Sell</option>
              <option>Rent</option>

            </Form.Select>

          </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>


    </>
  );
}

export default Home;