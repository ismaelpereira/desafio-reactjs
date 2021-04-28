import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./pages/form";
import Profile from "./pages/profile";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/home" component={Form} />
          <Route exact path="/" component={Form} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
