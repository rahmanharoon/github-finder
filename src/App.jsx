import "./App.css";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import User from "./components/users/User";
import Alert from "./components/alert/Alert";
import Navbar from "./components/layout/navbar";
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";
import NoDataFound from "./pages/noDataFound/NoDataFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/user/:login" exact component={User} />
                <Route component={NoDataFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
