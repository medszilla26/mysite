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
                  <FontAwesomeIcon icon={["fas", "briefcase"]} />
                  <li>pablo-reactsite.herokuapp.com</li>
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
                <ProgressBar name="MongoDB" value={80} />
                <ProgressBar name="MySQL" value={80} />
                <h6>LANGUAGES</h6>
                <ProgressBar name="English" value={100} />
                <ProgressBar name="Spanish" value={90} />
              </div>
            </Col>
            <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
              <div className="summary">
                <h3>Summary</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ultricies leo integer malesuada nunc vel risus. Neque egestas
                  congue quisque egestas diam. Sed enim ut sem viverra aliquet
                  eget. Vulputate sapien nec sagittis aliquam malesuada
                  bibendum.
                </p>
              </div>
              <div className="experience">
                <h3>Experience</h3>
                <ul className="list-unstyled">
                  <li>
                    <h5>Transportation Security Officer</h5>
                    <h6>
                      Department of Homeland Security - Houston, TX &middot;
                      2011-present
                    </h6>
                    <ul>
                      <li>one</li>
                      <li>two</li>
                      <li>three</li>
                    </ul>
                    <li>
                      <h5>Inside Sales Rep</h5>
                      <h6>
                        Lackstone Granite & Marble - Houston, TX &middot;
                        2010-2011
                      </h6>
                      <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                      </ul>
                    </li>
                  </li>
                </ul>
              </div>
              <div className="school">
                <h3>Education</h3>
                <ul className="list-unstyled">
                  <li>
                    <h5>The University of Texas - Austin, TX</h5>
                    <h6>Full Stack Web Development Certificate</h6>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Resume2;
