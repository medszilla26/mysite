import React, { Component } from "react";
import { CardColumns, Container } from "react-bootstrap";
import Projects from "../components/cardprojects";

class Portfolio extends Component {
  render() {
    return (
      <div className="page-container">
        <Container>
          <div className="portfolio">
            <h2>Projects</h2>
            <CardColumns>
              <Projects />
            </CardColumns>
          </div>
        </Container>
      </div>
    );
  }
}
export default Portfolio;
