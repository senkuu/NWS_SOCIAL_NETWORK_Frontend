import React from "react";
import NavBar from "components/NavBar";

// import material ui components
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Typography variant="h1">Home</Typography>
    </React.Fragment>
  );
}

export default Home;
