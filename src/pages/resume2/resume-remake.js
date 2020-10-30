import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

class Resume2 extends Component {
  render() {
    return (
      <div className="page-container">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <div className="header">
                <h1>Pablo Hernandez</h1>
                <p>
                  (832) 904-1663 &nbsp;|&nbsp; pablohdzjr@gmail.com
                  &nbsp;|&nbsp; Houston, Texas
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Resume2;
