import React, { Component } from "react";
import CardProject from "../cardprojects/card";

class Projects extends Component {
  render() {
    return (
      <div>
        <CardProject
          src="holder.js/100px160"
          title="Example"
          text="example text"
          github="https://github.com/medszilla26"
          live="https://github.com"
        />
        <CardProject
          src="holder.js/100px160"
          title="Example"
          text="example text"
          github="https://github.com/medszilla26"
          live="https://github.com"
        />
        <CardProject
          src="holder.js/100px160"
          title="Example"
          text="example text"
          github="https://github.com/medszilla26"
          live="https://github.com"
        />
        <CardProject
          src="holder.js/100px160"
          title="Example"
          text="example text"
          github="https://github.com/medszilla26"
          live="https://github.com"
        />
      </div>
    );
  }
}
export default Projects;
