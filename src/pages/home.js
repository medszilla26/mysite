import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import pablologo from "../assets/branding/pablo-logo.png";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Jumbotron fluid className="home">
          <a href="/about">
            <img
              className="branding-logo"
              src={pablologo}
              alt="branding logo"
            />
          </a>
          <hr />
          <h2>PABLO HERNANDEZ</h2>
          <hr />
        </Jumbotron>
      </div>
    );
  }
}
export default Home;
