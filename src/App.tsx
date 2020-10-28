import React from "react";

// import pages
import Home from "./pages/Home";

// import Provider
import { UserContextProvider } from "services/contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Home />
      </UserContextProvider>
    </div>
  );
}

export default App;
