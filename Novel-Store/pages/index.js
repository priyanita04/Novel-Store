import { useEffect } from 'react'
import {Button, Row, Col } from 'react-bootstrap'
import Header from '../comp/Header'
import { useRouter } from 'next/router'

export default function Landing() {

  const router = useRouter();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo")
    if(userInfo)
    {
      router.push("/home")
    }
  }, )
  return (
    <>
      <Header/>
      <Row className="image_div">
        <Col>
        <Button variant="primary" type="submit" style={{marginTop: "20px" }} href="/login">
            LOGIN
          </Button>
          <Button variant="primary" type="submit" style={{marginTop: "20px" }} href="/register">
            REGISTER
          </Button>

        </Col>

      </Row>
    </>
  )
}
