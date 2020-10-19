import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import MyForm from "../../components/form/myForm";

class Contact extends Component {
  render() {
    return (
      <div className="page-container">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <div className="contact">
                <h2>Get in Touch</h2>
                <p>
                  Please feel free to fill out this form and I'll get back in
                  touch with you.
                </p>
                <MyForm />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Contact;
