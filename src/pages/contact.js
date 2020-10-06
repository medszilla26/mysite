import React, { Component } from "react";
import myForm from "../components/myForm";
import { Container } from "react-bootstrap";
import MyForm from "../components/myForm";

class Contact extends Component {
  render() {
    return (
      <Container>
        <h1>Contact Me</h1>
        <MyForm />
      </Container>
    );
  }
}
export default Contact;
