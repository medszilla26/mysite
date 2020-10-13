import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import pablologo from "../assets/branding/pablo-logo.png";

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <Jumbotron fluid className="landing">
          <a href="/about">
            <img className="landing-logo" src={pablologo} alt="branding logo" />
          </a>
          <hr />
          <h2>PABLO HERNANDEZ</h2>
          <hr />
        </Jumbotron>
      </div>
    );
  }
}
export default Landing;
