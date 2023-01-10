import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <div id="header-logo">
        <Link to="/">Logo</Link>
      </div>

      <div id="header-container">
        <Link to="/patient">Patient</Link>
        <Link to="/doctor">Doctor</Link>
        {/* <Link to="/patient">Patient</Link> */}
      </div>

      <div id="header-auth">
        <Link to="/signup">Sign Up</Link>
      </div>
    </header>
  );
}
