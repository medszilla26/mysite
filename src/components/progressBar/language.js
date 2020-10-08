import React, { Component } from "react";
import "./style.css";

class Language extends Component {
  render() {
    return (
      <div>
        <div className="language-name">
          {this.props.language}
          {""}
        </div>
        <progress value={this.props.value} max="100" />
      </div>
    );
  }
}
export default Language;
