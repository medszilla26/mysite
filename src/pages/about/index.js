import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import portrait from "../../assets/photos/pablohdz.jpeg";
import resumepdf from "../../assets/portfolio/resumev2.pdf";

class About extends Component {
  render() {
    return (
      <div className="page-container">
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
              <div className="aboutme">
                <h1>Pablo Hernandez</h1>
                <h6>Front End Developer</h6>
                <p>
                  I'm a Houston based Full Stack Web Developer with a background
                  in Graphic Design. Recently earned a certification in Full
                  Stack Development from the University of Texas at Austin, with
                  newly developed skills in JavaScript, React and responsive web
                  design.
                </p>
              </div>
              <a href={resumepdf} download="pabloh-resume">
                <button className="download-btn" type="button">
                  <FontAwesomeIcon icon={["fas", "file-download"]} />
                  &nbsp; DOWNLOAD RESUME
                </button>
              </a>
            </Col>
            <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
              <img
                className="portrait-photo"
                src={portrait}
                alt="self portrait of Pablo"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default About;
