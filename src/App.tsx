import Guilds from "components/Guilds/Guilds";
import Guild from "components/Guilds/Guilds";
import UserGuilds from "components/UserGuilds/UserGuilds";
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

// import pages
import listGuilds from "./components/ListGuilds/ListGuilds";
import CreatePosts from "./components/Posts/CreatePosts";
import UpdatePosts from "./components/Posts/UpdatePosts";
import PostsDisplay from "./components/Posts/PostsDisplay";
import Home from "./pages/Home/Home";

// import Provider
import { UserContextProvider } from "services/contexts/UserContext";

function App() {
  return (
    <div className="App">

  <UserContextProvider>
      <Router>
        <Home />
        <Route path="/" exact component={PostsDisplay} />
        <Route path="/listeDesGuildes" exact component={listGuilds}/>
        <Route path="/guild/:id" exact component={Guilds}/>
        <Route path="/user/:id/guilds/" exact component={UserGuilds}/>
        <Route path="/Poster" exact component={CreatePosts}/>
        <Route path="/modifierPoste" exact component={UpdatePosts}/>
      </Router>
  </UserContextProvider>
    </div>
  );
}

export default App;