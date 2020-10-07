import React, { Component } from "react";
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
            <div>
              <ul>
                <li>Linkedin</li>
                <li>GitHub</li>
              </ul>
            </div>
          </Col>
          <Col>More Detailed stuff in here</Col>
        </Row>
      </Container>
    );
  }
}
export default Resume;
