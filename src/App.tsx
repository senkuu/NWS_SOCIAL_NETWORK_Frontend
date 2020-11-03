import Guilds from "components/Guilds/Guilds";
import Guild from "components/Guilds/Guilds";
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
// import pages
import listGuilds from "./components/ListGuilds/ListGuilds";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Route path="/listeDesGuildes" exact component={listGuilds}/>
        <Route path="/guild/:id" exact component={Guilds}/>
      </Router>
    </div>
  );
}

export default App;