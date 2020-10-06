import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyForm from "../components/form/myForm";

class Contact extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs md="auto">
            <div>
              <h2>Contact Me</h2>
              <MyForm />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Contact;
