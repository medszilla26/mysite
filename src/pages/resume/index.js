import React, { Component } from "react";
import "./style.css";
import resumedoc from "../../assets/portfolio/resume.pdf";
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
                  pablohdzjr@gmail.com&nbsp;| (832) 904-1663&nbsp;| Houston, TX
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
              <div className="sidebar-socials">
                <ul className="list-unstyled">
                  <FontAwesomeIcon
                    icon={["fab", "github-alt"]}
                    className="sidebar-ico"
                  />
                  <li>github.com/medszilla26</li>

                  <FontAwesomeIcon
                    icon={["fab", "linkedin-in"]}
                    className="sidebar-ico"
                  />
                  <li>linkedin.com/in/pablohdzjr</li>
                </ul>
              </div>
              <div className="progressbar-container">
                <h6>SKILLS</h6>
                <ProgressBar name="React" value={80} />
                <ProgressBar name="jQuery" value={65} />
                <ProgressBar name="JavaScript" value={75} />
                <ProgressBar name="MongoDB" value={80} />
                <ProgressBar name="MySQL" value={75} />
                <ProgressBar name="CSS" value={100} />
                <ProgressBar name="HTML5" value={100} />
                <ProgressBar name="Illustrator" value={85} />
                <h6>LANGUAGES</h6>
                <ProgressBar name="English" value={100} />
                <ProgressBar name="Spanish" value={85} />
              </div>
            </Col>
            <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
              <div className="objective">
                <h3>Objective</h3>
                <p>
                  Recently graduated full stack developer with a keen eye in
                  graphic design. Looking to join a team where opportunity for
                  growth and professional development is encouraged.
                </p>
              </div>
              <div className="work-history">
                <h3>Work History</h3>
                <ul className="list-unstyled">
                  <li>
                    <h4>TSA</h4>
                    <h5>Officer & Logistics Dept.&nbsp; 2011 - 2020</h5>
                    <ul>
                      <li>
                        Communicated daily briefings to crew before and after
                        shifts.
                      </li>
                      <li>
                        Maintained a calm and professional demeanor during
                        stressful encounters with passengers.
                      </li>
                      <li>
                        Effectively and efficiently relayed critical information
                        to passengers and coworkers.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Lackstone</h4>
                    <h5>Inside Sales Rep&nbsp; 2010 - 2011</h5>
                    <ul>
                      <li> Responsible for opening and setting up shop.</li>
                      <li>
                        Created personal connections with homeowners,
                        homebuilders and subcontractors.
                      </li>
                      <li>
                        Participated in weekly meetings to discuss team goals.
                      </li>
                      <li>
                        Worked with team members to facilitate calls, mananged
                        work flow and maximized client relationships.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="education">
                <h3>Education</h3>
                <ul className="list-unstyled">
                  <li>
                    <h5>The University of Texas - Austin,Tx</h5>
                    <h6>Full Stack Web Development - Certification</h6>
                  </li>
                  <li>
                    <h5>Lone Star College - North Harris</h5>
                    <h6>Graphic Design - Certification</h6>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <a href={resumedoc} download="pabloh-resume">
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
