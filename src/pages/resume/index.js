import React, { Component } from "react";
import "./style.css";

import ProgressBar from "../../components/progbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";

class Resume extends Component {
  render() {
    return (
      <div className="page-container">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <div className="resume-header">
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
                  Full Stack Web Developer with a background in Graphic Design
                  and life-long dedication to learning and adapting to new
                  applications and technologies.
                </p>
              </div>
              <div className="experience">
                <h3>Experience</h3>
                <ul className="list-unstyled">
                  <li>
                    <h5>
                      <b>Transportation Security Officer</b>
                    </h5>
                    <h6>
                      <b>Department of Homeland Security </b>
                      &mdash; Houston, TX &middot; 2011-2020
                    </h6>
                    <ul>
                      <li>
                        Coached new hired officers, provided on the job training
                        and feedback on standard operating procedures and job
                        performance.
                      </li>
                      <li>
                        Performed daily maintenance of various operating
                        equipment critical to everyday screening.
                      </li>
                      <li>
                        Conducted screening procedures while maintaining a
                        professional and calm demeanor during stressful
                        encounters with passengers.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>
                      <b>Inside Sales Rep</b>
                    </h5>
                    <h6>
                      <b>Lackstone Granite & Marble </b>
                      &mdash; Houston, TX &middot; 2010-2011
                    </h6>
                    <ul>
                      <li>one</li>
                      <li>two</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="education">
                <h3>Education</h3>
                <ul className="list-unstyled">
                  <li>
                    <h5>
                      <b>Full Stack Development Bootcamp Certificate</b>
                    </h5>
                    <h6>
                      <b>University of Texas at Austin </b> &mdash; Houston, TX
                    </h6>
                    <ul className="list-unstyled">
                      <li>
                        <p>
                          Intensive program that offered challenging exercises
                          and group projects gaining experience in full-stack
                          web development. Developed skills in Javascript,
                          MongoDB, MySQL, Express, React, Bootstrap, Foundation,
                          HTML5 and CSS3.
                        </p>
                      </li>
                    </ul>
                    <h5>
                      <b>Graphic Design Certificate</b>
                    </h5>
                    <h6>
                      <b>Lone Star College North Harris </b> &mdash; Houston, TX
                    </h6>
                    <ul className="list-unstyled">
                      <li>
                        <p>
                          Program focused on graphic design concepts in
                          illustration, color theory, web design, principles of
                          design & image editing using Adobe Illustrator,
                          Photoshop and InDesign. Class assignments involved
                          hands-on photo editing, print media design, branding
                          and logo design.
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <a download="pabloh-resume">
            <button className="resume-btn" type="button">
              <FontAwesomeIcon icon={["fas", "file-download"]} />
              &nbsp; DOWNLOAD RESUME
            </button>
          </a>
        </Container>
      </div>
    );
  }
}
export default Resume;
