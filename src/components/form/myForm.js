import React from "react";
import "../form/style.css";
import { Form } from "react-bootstrap";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xdopaegp"
        method="POST"
      >
        <Form.Group controlId="form-name-input">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="First and Last" />
        </Form.Group>
        <Form.Group controlId="form-email-input">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email@domain.com"
          />
        </Form.Group>
        <Form.Group controlId="form-subject-input">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" name="subject" placeholder="Subject" />
        </Form.Group>
        <Form.Group controlId="form-textarea-message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            name="message"
            rows="8"
            placeholder="Questions, Comments, Possible Job Offer?"
          />
        </Form.Group>

        {status === "SUCCESS" ? (
          <p className="thankyou-message">Thanks for your submission!</p>
        ) : (
          <button type="submit" className="submit-btn">
            <span>SEND</span>
          </button>
        )}
        {status === "ERROR" && (
          <p className="error-message">Oops, something wasn't right</p>
        )}
      </Form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
