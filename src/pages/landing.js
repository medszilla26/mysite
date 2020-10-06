import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import pablologo from "../assets/branding/pablo-logo.png";

class Landing extends Component {
  render() {
    return (
      <div className="landing-background">
        <Jumbotron fluid className="landing">
          <img className="landing-logo" src={pablologo} alt="branding logo" />
        </Jumbotron>
      </div>
    );
  }
}
export default Landing;
