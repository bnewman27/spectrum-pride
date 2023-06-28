// build a navbar.jsx file with routes to the home, services, about, and contact components
// import react
import React from 'react';
// import react router
import { Link } from 'react-router-dom';
// import reactstrap
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// create and export navbar component
export default function CustomNavbar() {
    return (
        <div className="navbar-container">
            <Navbar className="navbar" expand="md">
                <NavbarBrand className="navbar-brand" tag={Link} to="/">MERN</NavbarBrand>
                <Nav className="navbar-nav" navbar>
                    <NavItem className="navbar-item">
                        <NavLink className="navbar-link" tag={Link} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem className="navbar-item">
                        <NavLink className="navbar-link" tag={Link} to="/services">Services</NavLink>
                    </NavItem>
                    <NavItem className="navbar-item">
                        <NavLink className="navbar-link" tag={Link} to="/about">About</NavLink>
                    </NavItem>
                    <NavItem className="navbar-item">
                        <NavLink className="navbar-link" tag={Link} to="/contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}


// end of file