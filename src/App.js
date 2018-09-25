import React, { Fragment } from "react";
import Main from "./Components/Main";

import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

export default () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" render={() => <h1>Login</h1>} />
      <Route path="/a" component={Main} />
    </Fragment>
  </BrowserRouter>
);
