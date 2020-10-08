import React, { Component } from "react";
import "./style.css";

class Skills extends Component {
  render() {
    return (
      <div>
        <div className="skill-name">
          {this.props.skill}
          {""}
        </div>
        <progress value={this.props.value} max="100" />
      </div>
    );
  }
}
export default Skills;
