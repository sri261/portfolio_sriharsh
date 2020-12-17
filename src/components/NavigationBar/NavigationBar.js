import React from "react";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">sD:</h1>
        <ul className="navbar-items">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
export default NavigationBar;
