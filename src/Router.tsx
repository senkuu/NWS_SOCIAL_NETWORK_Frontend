import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import pages
import Home from "pages/Home";
import Projet from "pages/Projet";
import Profil from "pages/Profil";
import Form from "pages/Projet/Formulaire";
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
        <Route exact path="/Form">
          <Form />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
