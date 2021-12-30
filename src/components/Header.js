import React from "react";
import "../components/Header.css";

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
