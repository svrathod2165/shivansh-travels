import React from "react";
import Navbar from "./components/Navbar/Navbar";
import UpperHeader from "./components/UpperHeader/UpperHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Home from "./Pages/Home/Home";
// import Home from

export default function App() {
  return (
    <div className="App">
      <Router>
        <UpperHeader />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
