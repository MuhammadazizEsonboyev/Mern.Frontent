import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { signout } from './../../actions/auth.actions';

/**
* @author
* @function Header
**/

export const Header = (props) => {


    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const logout = ( ) =>{
        dispatch(signout())
    }


    const renderLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span className="nav-link" onClick={logout}>Sign out</span>
                </li>
            </Nav>
        );
    }

    const renderNonLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to='/signin' className="nav-link">Sign in</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/signup' className="nav-link">Sign up</NavLink>
                </li>
            </Nav>
        )
    }


    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
            <Container fluid>
                <Link to="/" className="navbar-brand">BEK-TEXNO</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    {auth.authenticate ? renderLoggedInLinks() :  renderNonLoggedInLinks()}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}