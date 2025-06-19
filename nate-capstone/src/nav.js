import React from "react";
import { Nav as BootstrapNav, NavLink } from 'react-bootstrap';

function Nav() {
    return (
      <BootstrapNav className="d-flex justify-content-center">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#menu">Menu</NavLink>
        <NavLink href="#reservations">Reservations</NavLink>
        <NavLink href="#order">Order Online</NavLink>
        <NavLink href="#login">Login</NavLink>
      </BootstrapNav>
    );
  }

  export default Nav;