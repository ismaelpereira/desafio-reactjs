import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./pages/form";
import Profile from "./pages/profile";

const App = (username) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path={`/profile/`} component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
