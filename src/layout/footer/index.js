import React from "react";
import "./style.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pablologo from "../../assets/branding/pablo-logo.png";

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Row>
          <Col md={4} sm={8}>
            <img className="logo-footer" src={pablologo} alt="branding logo" />
          </Col>
          <Col md={4} sm={8} className="social-list">
            <ul className="list-unstyled social-icons">
              <li>
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  size="3x"
                  className="ico"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  size="3x"
                  className="ico"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  size="3x"
                  className="ico"
                />
              </li>
            </ul>
          </Col>
          <Col md={3} sm={8} className="location">
            <h5>Houston, Tx</h5>
          </Col>
        </Row>
        <Row>
          <Col className="footer-bottom">
            <p className="footer-copyright text-muted">
              Copyright &copy; {new Date().getFullYear()} Pablo Hernandez Jr
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
