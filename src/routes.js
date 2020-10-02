import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Landing from "./pages/landing";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/notfound";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
