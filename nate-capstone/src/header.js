import React from "react";
import Nav from './nav.js';

function Header() {
    return (
      <>
          <header>
            <img src="/icons_assets/Logo.svg" alt="company logo"/>
          <Nav />
          </header>
      </>
    );
  }
  
  export default Header;