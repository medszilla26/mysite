import React, { Component } from "react";
import "./style.css";
import ProgressBar from "../../components/progbar";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <Row>
            <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
              <div className="sidebar">
                <ul className="list-unstyled">
                  <FontAwesomeIcon icon={["fab", "github-alt"]} />
                  <li>github.com/medszilla26</li>
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                  <li>linkedin.com/in/pablohdzjr</li>
                </ul>
              </div>
              <div className="progress-container">
                <h6>SKILLS</h6>
                <ProgressBar name="HTML5" value={80} />
                <ProgressBar name="CSS3" value={80} />
                <ProgressBar name="JavaScript" value={80} />
                <ProgressBar name="React" value={80} />
                <ProgressBar name="Bootstrap" value={80} />
                <ProgressBar name="Foundation" value={80} />
                <ProgressBar name="JQuery" value={80} />
                <h6>LANGUAGES</h6>
                <ProgressBar name="English" value={100} />
                <ProgressBar name="Spanish" value={90} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Resume2;
