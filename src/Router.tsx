import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import pages
import Home from "pages/Home";
import Projet from "pages/Projet";
import Profil from "pages/Profil";


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Projet">
          <Projet />
        </Route>
        <Route exact path="/Profil">
          <Profil />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
