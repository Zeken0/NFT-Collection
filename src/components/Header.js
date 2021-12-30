import React from "react";
import "../components/Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
