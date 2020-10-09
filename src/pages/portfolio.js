import React, { Component } from "react";
import Project from "../components/card";
import { Card, CardColumns, Container } from "react-bootstrap";

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <div className="portfolio">
          <CardColumns>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>Some Text Here</Card.Text>
                <button>one</button>
                <button>two</button>
              </Card.Body>
            </Card>
            <Project
              src="holder.js/100px160"
              title="Example"
              text="example text"
              github="https://github.com/medszilla26"
              live="https://github.com"
            />
          </CardColumns>
        </div>
      </Container>
    );
  }
}
export default Portfolio;
