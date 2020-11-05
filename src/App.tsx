import React from "react";

// import router
import Router from "./Router";

// import Provider
import { UserContextProvider } from "services/contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </div>
  );
}

export default App;
