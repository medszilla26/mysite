import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Jumbotron } from "react-bootstrap";

class NotFound extends Component {
  render() {
    return (
      <div className="notfound-container">
        <Jumbotron className="notfound">
          <FontAwesomeIcon icon={["fas", "ban"]} className="nf-ico" />
          <p>ERROR 404: The Page You Requested Cannot Be Found!</p>
        </Jumbotron>
      </div>
    );
  }
}
export default NotFound;
