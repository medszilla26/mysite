import React from "react";
import Routes from "./routes";
import Navigation from "./layout/navbar";
import Footer from "./layout/footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./components/fontawesomeicons";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
