import React, { Component } from "react";
import "./style.css";
import { Card } from "react-bootstrap";

class CardProject extends Component {
  render() {
    return (
      <Card>
        <Card.Img src={this.props.src} className="project-image" />
        <Card.Body>
          <Card.Title>
            {this.props.title}
            {""}
          </Card.Title>
          <Card.Text>
            {this.props.text}
            {""}
          </Card.Text>
          <div className="card-buttons">
            <a href={this.props.github} target="blank" className="link-text">
              <button className="link-btn">GITHUB</button>
            </a>
            <a href={this.props.live} target="blank">
              <button className="link-btn" type="button">
                LIVE SITE
              </button>
            </a>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
export default CardProject;
