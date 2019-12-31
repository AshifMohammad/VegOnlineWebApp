/* global gapi */
import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home } from "./components";
import { SignUp } from "./components/materialComponents/Pages";

const ROOT_PATH = process.env.PUBLIC_URL || "/signUp";

const history = createBrowserHistory();

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isUserLoggedIn: false };
  }

  componentDidMount() {
    //TODO: assuption that signup is success
    document
      .getElementById("loginButtonWithGoogle")
      .addEventListener("click", () => {
        this.setState({ isUserLoggedIn: true });
      });
    //TODO: integrate the Google api login
    // window.gapi.load("auth2", () => {
    //   // Retrieve the singleton for the GoogleAuth library and set up the client.
    //   this.auth2 = window.gapi.auth2.init({
    //     client_id:
    //       "157277293944-hsrehfv8omef78dio357msu29d5btm39.apps.googleusercontent.com",
    //     cookiepolicy: "single_host_origin"
    //   });
    //
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route render={this.state.isUserLoggedIn ? Home : SignUp} />
          <Route exact path={`${ROOT_PATH}/home`} render={Home} />
          <Route exact path={`${ROOT_PATH}/signUp`} render={SignUp} />
          <Route render={SignUp} />
        </Switch>
      </Router>
    );
  }
}
