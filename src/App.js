import React from "react";
import Routes from "./routes";
import Navigation from "./layout/navbar";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
