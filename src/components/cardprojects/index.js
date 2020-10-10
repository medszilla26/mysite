import React, { Component } from "react";
import burger from "../../assets/portfolio/BurgerApp.png";
import code from "../../assets/portfolio/CodeQuiz.png";
import password from "../../assets/portfolio/PasswordGenerator.png";
import brew from "../../assets/portfolio/BrewFinder.png";
import CardProject from "../cardprojects/card";

class Projects extends Component {
  render() {
    return (
      <div>
        <CardProject
          src={burger}
          title="Burger App"
          text="example text"
          github="https://github.com/medszilla26/eat-da-burger"
          live="https://fierce-eyrie-21522.herokuapp.com/"
        />
        <CardProject
          src={code}
          title="Code Quiz"
          text="example text"
          github="https://github.com/medszilla26/timed-code-quiz"
          live="https://medszilla26.github.io/timed-code-quiz/"
        />
        <CardProject
          src={password}
          title="Password Generator"
          text="example text"
          github="https://github.com/medszilla26/password-generator"
          live="https://medszilla26.github.io/password-generator/"
        />
        <CardProject
          src={brew}
          title="Brew Finder"
          text="example text"
          github="https://github.com/medszilla26"
          live="https://github.com"
        />
      </div>
    );
  }
}
export default Projects;
