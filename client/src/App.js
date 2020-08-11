import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div id="body">
      <Router>
        <NavBar />
        <Header/>
      </Router>
    </div>
  );
}

export default App;
