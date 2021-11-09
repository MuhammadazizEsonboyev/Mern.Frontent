import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
/**
* @author
* @function Header
**/

export const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* <Navbar.Brand href="#home">BEK-Texno</Navbar.Brand> */}
                <Link to="/" className="navbar-brand">BEK-Texno</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
                        <li className="nav-item">
                            <NavLink to='/signin' className="nav-link">Signin</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/signup' className="nav-link">Signup</NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}