import React, { Component, lazy, Suspense } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./utility/NavBar/NavBar";
import Home from "./pages/Home/Home";
import SingelFullVenue from "./pages/SingelFullVenue/SingelFullVenue";
import Modal from "./utility/Modal/Modal";
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/venue/:vid" component={SingelFullVenue} />
        <Route exact path="/" component={Modal} />
      </Router>
    );
  }
}
export default App;