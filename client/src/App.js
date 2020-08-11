import React from 'react';
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div id="body">


    <Router>
      <NavBar/>
    </Router>
    </div>
  );
}

export default App;
