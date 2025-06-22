import React from "react";
import { Nav as BootstrapNav, NavLink } from 'react-bootstrap';

function Nav() {
    return (
      <BootstrapNav className="d-flex justify-content-center">
        <NavLink href="#home" className="nav-item">Home</NavLink>
        <NavLink href="#about" className="nav-item">About</NavLink>
        <NavLink href="#menu" className="nav-item">Menu</NavLink>
        <NavLink href="#reservations" className="nav-item">Reservations</NavLink>
        <NavLink href="#order" className="nav-item">Order Online</NavLink>
        <NavLink href="#login" className="nav-item">Login</NavLink>
      </BootstrapNav>
    );
  }

  export default Nav;