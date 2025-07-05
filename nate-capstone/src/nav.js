import React from "react";
import { Nav as BootstrapNav, NavLink } from 'react-bootstrap';

function Nav( { setCurrentScreen, currentScreen } ) {
    return (
      <BootstrapNav className="bootstrap-nav">
        <NavLink 
        onClick={()=>setCurrentScreen('home')} 
        className={`nav-item ${currentScreen === 'home' ? 'active' : ''}`}
        style={{ fontWeight: currentScreen === 'home' ? 'bold' : 'normal' }}>Home
        </NavLink>
        <NavLink 
        onClick={()=>setCurrentScreen('about')} 
        className={`nav-item ${currentScreen === 'about' ? 'active' : ''}`}
        style={{ fontWeight: currentScreen === 'about' ? 'bold' : 'normal' }}>About
        </NavLink>
        <NavLink 
        onClick={()=>setCurrentScreen('menu')} 
        className={`nav-item ${currentScreen === 'menu' ? 'active' : ''}`}
        style={{ fontWeight: currentScreen === 'menu' ? 'bold' : 'normal' }}>Menu
        </NavLink>
        <NavLink 
        onClick={()=>setCurrentScreen('booking-form')} 
        className={`nav-item ${currentScreen === 'booking-form' ? 'active' : ''}`}
        style={{ fontWeight: currentScreen === 'booking-form' ? 'bold' : 'normal' }}>Reservations
        </NavLink>
        <NavLink 
        onClick={()=>setCurrentScreen('order')} 
        className={`nav-item ${currentScreen === 'order' ? 'active' : ''}`}
        style={{ fontWeight: currentScreen === 'order' ? 'bold' : 'normal' }}>Order Online
        </NavLink>
        <NavLink 
        onClick={()=>setCurrentScreen('login')} 
        className={`nav-item ${currentScreen === 'login' ? 'active' : ''}`}
        style={{ fontWeight: currentScreen === 'login' ? 'bold' : 'normal' }}>Login
        </NavLink>
        <NavLink 
        onClick={()=>setCurrentScreen('cart')} 
        className={`nav-item ${currentScreen === 'cart' ? 'active' : ''}`}
        style={{ fontWeight: currentScreen === 'cart' ? 'bold' : 'normal' }}>
          <img src="/icons_assets/icons8-cart-50.png" alt="Cart" width="20" height="20" /> Cart
        </NavLink>
      </BootstrapNav>
    );
  }

  export default Nav;