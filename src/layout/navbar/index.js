import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav } from "react-bootstrap";
import pablologo from "../../assets/branding/pablo-logo.png";

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="logo-box">
          <a href="/" className="logo-navbar">
            <img className="logo-navbar" src={pablologo} alt="branding logo" />
          </a>
        </div>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FontAwesomeIcon icon={["fas", "bars"]} className="menu-button" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/portfolio">My Work</Nav.Link>
              <Nav.Link href="/contact">Contact Me</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
