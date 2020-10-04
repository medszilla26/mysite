import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav } from "react-bootstrap";
import pablologo from "../../assets/branding/pablo-logo.png";

class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img className="logo-navbar" src={pablologo} alt="branding logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={["fas", "times"]} size="2x" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">My Work</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
