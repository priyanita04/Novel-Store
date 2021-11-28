import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container style={{color: 'black'}}>
                    <Navbar.Brand href="/">Book Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header