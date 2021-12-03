import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useRouter } from 'next/router'


function Header() {

    const router = useRouter();

    const logoutHandler = () =>{


        localStorage.removeItem('userInfo')
        console.log("logged out")
        router.push("/login")
    }

    return (

        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Book Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/login">Home</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header