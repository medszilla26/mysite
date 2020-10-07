import React, { Component } from "react";
import "../progressBar/style.css";
import { ProgressBar } from "react-bootstrap";

class Skills extends Component {
  render() {
    return (
      <div>
        <div className="skill-name">
          {this.props.skill}
          {""}
        </div>
        <ProgressBar className="skill-bar" now={this.props.now} />
      </div>
    );
  }
}
export default Skills;
