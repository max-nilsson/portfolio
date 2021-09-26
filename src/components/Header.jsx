import React from 'react'
import { Navbar, NavbarBrand, } from 'react-bootstrap'

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
