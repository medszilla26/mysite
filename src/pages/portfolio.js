import React, { Component } from "react";
import { CardColumns, Container } from "react-bootstrap";
import Projects from "../components/cardprojects";

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <div className="portfolio">
          <CardColumns>
            <Projects />
          </CardColumns>
        </div>
      </Container>
    );
  }
}
export default Portfolio;
