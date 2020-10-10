import React, { Component } from "react";
import Skills from "../components/progressbar/skill";
import Language from "../components/progressbar/language";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";

class Resume extends Component {
  render() {
    return (
      <div className="page-container">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <div className="resume-name">
                <h1>Pablo Hernandez</h1>
                {/* <hr /> */}
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
                <div className="sidebar-title">SKILLS</div>
                <Skills skill="HTML/CSS" value={85} />
                <Skills skill="Javascript" value={75} />
                <Skills skill="Javascript" value={75} />
                <Skills skill="Javascript" value={75} />
                <Skills skill="Javascript" value={100} />
                <div className="sidebar-title">LANGUAGES</div>
                <Language language="English" value={90} />
                <Language language="Spanish" value={80} />
              </div>
            </Col>
            <Col lg={{ span: 6, order: 1 }} xs={{ span: 12, order: 1 }}>
              <div>
                <h3>Objective</h3>
                <p>
                  Morbi quis turpis pharetra, sagittis erat in, finibus eros.
                  Integer ultricies mi ac eros dignissim dapibus. Nulla tortor
                  ante, consectetur at porta ut, aliquam vitae libero. Donec
                  cursus, augue ut facilisis tincidunt, nibh nulla facilisis
                  odio, vitae mattis quam ipsum sed nisi. Orci varius natoque
                  penatibus.
                </p>
              </div>
              <div>
                <h3>Work History</h3>
                <ul className="list-unstyled">
                  <li>
                    <h5>TSA</h5>
                    <p>2011-present</p>
                    <p>
                      Morbi quis turpis pharetra, sagittis erat in, finibus
                      eros. Integer ultricies mi ac eros dignissim dapibus.
                      Nulla tortor ante, consectetur at porta ut, aliquam vitae
                      libero. Donec cursus.
                    </p>
                  </li>
                  <li>
                    <h5>Lackstone</h5>
                    <p>2010-2011</p>
                    <p>
                      Morbi quis turpis pharetra, sagittis erat in, finibus
                      eros. Integer ultricies mi ac eros dignissim dapibus.
                      Nulla tortor ante, consectetur at porta ut, aliquam vitae
                      libero. Donec cursus.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Education</h3>
                <ul className="list-unstyled">
                  <li>
                    <h6>The University of Texas - Austin,Tx</h6>
                  </li>
                  <li>
                    <h6>Lone Star College - North Harris</h6>
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
export default Resume;
