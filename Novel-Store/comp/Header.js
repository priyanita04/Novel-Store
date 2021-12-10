import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useRouter } from 'next/router'


function Header() {

  const router = useRouter();
  const [isUser, setIsUser] = useState(false);
  const [name, setName] = useState("");

  const logoutHandler = () => {
    localStorage.removeItem('userInfo')
    console.log("logged out")
    router.push("/login")
  }

  useEffect(() => {
    const userIn = localStorage.getItem("userInfo");
    if (userIn) {
      const user = JSON.parse(userIn);
      setIsUser(true);
      setName(user.username)
    }

    console.log("userinfo is", name)
  }, [])

  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Book Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              isUser ? (
                <>
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  <NavDropdown title="Settings" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profile">{name}</NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </>
              )
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header