import React, { Component } from "react";
import Skills from "../components/progressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";

class Resume extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <div className="resume-name">
              <h1>Pablo Hernandez</h1>
              {/* <hr /> */}
              <p>
                pablohdzjr@gmail.com&nbsp;| (832) 904-1663&nbsp;| Houston, TX
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="resume-socials">
              <ul className="list-unstyled">
                <FontAwesomeIcon
                  icon={["fab", "linkedin-in"]}
                  className="resume-ico"
                />
                <li>
                  <span>linkedin.com/in/pablohdzjr</span>
                </li>
                <FontAwesomeIcon
                  icon={["fab", "github-alt"]}
                  className="resume-ico"
                />
                <li>
                  <span>github.com/medszilla26</span>
                </li>
              </ul>
            </div>
            <div className="resume-skills">
              <h6>SKILLS</h6>
              <hr />
              <br />
              <div className="skill-container">
                <Skills skill="HTML/CSS" value={85} />
                <Skills skill="Javascript" value={75} />
              </div>
            </div>
          </Col>
          <Col>More Detailed stuff in here</Col>
        </Row>
      </Container>
    );
  }
}
export default Resume;
