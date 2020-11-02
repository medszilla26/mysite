import React from "react";
import "./style.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Row>
          <Col>
            <div className="social-section">
              <a href="https://github.com/medszilla26" target="blank">
                <FontAwesomeIcon icon={["fab", "github"]} className="ico" />
              </a>
              <a href="https://www.linkedin.com/in/pablohdzjr/" target="blank">
                <FontAwesomeIcon icon={["fab", "linkedin"]} className="ico" />
              </a>
              <a href="https://www.instagram.com/medszilla26" target="blank">
                <FontAwesomeIcon icon={["fab", "instagram"]} className="ico" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <a href="mailto: pablohdzjr@gmail.com" className="contact-info">
                pablohdzjr@gmail.com
              </a>
              &nbsp;|&nbsp;
              <a href="tel: 8329041663" className="contact-info">
                (832) 904-1663
              </a>
              &nbsp;|&nbsp;
              <span className="state-info">Houston, TX</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="footer-bottom">
            <p className="footer-copyright text-muted">
              Copyright &copy; {new Date().getFullYear()} Pablo Hernandez
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
