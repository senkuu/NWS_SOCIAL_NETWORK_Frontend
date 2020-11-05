import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import pages
import Home from "pages/Home";
import Profile from "pages/Profile";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
