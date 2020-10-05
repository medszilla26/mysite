import React from "react";
import "./style.css";
import { Col, Row } from "react-bootstrap";
import pablologo from "../../assets/branding/pablo-logo.png";

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Row>
          <Col md={3} sm={8}>
            <img className="logo-footer" src={pablologo} alt="branding logo" />
          </Col>
          <Col md={3} sm={8}>
            <h4>Reach Me Here</h4>
          </Col>
          <Col md={3} sm={8}>
            <h4>Reach Me Here</h4>
          </Col>
        </Row>
        <Row>
          <Col className="footer-bottom">
            <p className="footer-copyright">
              Copyright &copy; {new Date().getFullYear()} Pablo Hernandez Jr
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
