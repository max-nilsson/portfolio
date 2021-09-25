import React from 'react'
import { Nav, Navbar, NavbarBrand, } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar className="Navbar">
            <NavbarBrand>
                <a href="/">Max Nilsson</a>
            </NavbarBrand>
        </Navbar>
    )
}

export default Header
