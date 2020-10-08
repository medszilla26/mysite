import React, { Component } from "react";
import portrait from "../assets/photos/pablo-self.png";
import { Container, Row, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-lg-center">
          <Col lg={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="aboutme">
              <h1>Pablo Hernandez</h1>
              <h6>Front End Developer</h6>
              <p>
                Morbi quis turpis pharetra, sagittis erat in, finibus eros.
                Integer ultricies mi ac eros dignissim dapibus. Nulla tortor
                ante, consectetur at porta ut, aliquam vitae libero. Donec
                cursus, augue ut facilisis tincidunt, nibh nulla facilisis odio,
                vitae mattis quam ipsum sed nisi. Orci varius natoque penatibus.
              </p>
            </div>
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
    );
  }
}
export default About;
