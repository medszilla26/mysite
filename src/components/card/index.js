import React, { Component } from "react";
import "./style.css";
import { Card } from "react-bootstrap";

class Project extends Component {
  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          src={this.props.src}
          className="project-image"
        />
        <Card.Body>
          <Card.Title>
            {this.props.title}
            {""}
          </Card.Title>
          <Card.Text>
            {this.props.text}
            {""}
          </Card.Text>
          <a href={this.props.github} target="blank">
            <button className="github-btn">github</button>
          </a>
          <a href={this.props.live} target="blank">
            <button className="live-btn" type="button">
              live
            </button>
          </a>
        </Card.Body>
      </Card>
    );
  }
}
export default Project;
