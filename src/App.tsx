import Guilds from "components/Guilds/Guilds";

import UserGuilds from "components/UserGuilds/UserGuilds";
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

// import pages
import listGuilds from "./components/ListGuilds/ListGuilds";
import GuildIfMember from "./components/GuildIfMember/GuildIfMember";
import CreatePosts from "./components/Posts/CreatePosts";
import UpdatePosts from "./components/Posts/UpdatePosts";
import Home from "./pages/Home";

// import Provider
import { UserContextProvider } from "services/contexts/UserContext";
import NewGuild from "components/NewGuild/NewGuild";

function App() {
  return (
    <div className="App">

  <UserContextProvider>
      <Router>
        <Home/>
        <Route path="/NouvelleGuilde" exact component={NewGuild} />
        <Route path="/listeDesGuildes" exact component={listGuilds}/>
        <Route path="/guild/:id" exact component={Guilds}/>
        <Route path="/user/:id/guilds/" exact component={UserGuilds}/>
        <Route path="/creerPoste" exact component={CreatePosts}/>
        <Route path="/modifierPoste" exact component={UpdatePosts}/>
        <Route path="/guilds/isConnected/:id" exact component={GuildIfMember}/>
      </Router>
  </UserContextProvider>
    </div>
  );
}

export default App;