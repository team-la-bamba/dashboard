import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './tailwind-ui.min.css' /* om tid finns - https://tailwindui.com/documentation#add-the-tailwindcss-ui-plugin */

import Dashboard from "./components/layout/Dashboard.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
