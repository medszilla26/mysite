import React from "react";
import Routes from "./routes";
import Navigation from "./layout/navbar";
import Footer from "./layout/footer";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
