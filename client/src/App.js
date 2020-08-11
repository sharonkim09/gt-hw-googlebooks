import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div id="body">
      <Router>
        <NavBar />
        <Header />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
