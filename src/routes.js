import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Landing from "./pages/landing";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import NotFound from "./pages/notfound";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/Landing" />
        </Route>
        <Route exact path="/landing" component={Landing}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route exact path="/resume" component={Resume}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    );
  }
}

export default Routes;
