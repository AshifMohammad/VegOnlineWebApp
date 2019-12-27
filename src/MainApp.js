import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home } from "./components";
import { SignUp } from "./materialComponents/Pages";

const ROOT_PATH = process.env.PUBLIC_URL || "/home";

const history = createBrowserHistory();

export const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={`${ROOT_PATH}/`}>
        <Home />
      </Route>
      <Route render={SignUp} />
    </Switch>
  </Router>
);
