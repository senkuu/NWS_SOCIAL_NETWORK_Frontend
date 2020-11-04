import React, { useContext } from "react";

// import material-ui components
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// import local components
import UserProfile from "./components/UserProfile";

// import contexts
import { UserContext } from "services/contexts/UserContext";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingBottom: 5,
    },
    title: {
      flexGrow: 1,
    },
  })
);

function NavBar() {
  const classes = useStyles();

  const { user, disconnectUser, authenticateUser } = useContext(UserContext);

  // if user is log, return this
  if (user) {
    return (
      <AppBar position="static" className={classes.root} data-testid="navbar">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            NWS
          </Typography>
          <UserProfile
            username={user.username}
            disconnectUser={disconnectUser}
          />
        </Toolbar>
      </AppBar>
    );
  }

  // if user isn't log, return this
  return (
    <AppBar position="static" data-testid="navbar">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          NWS
        </Typography>
        <Button
          color="inherit"
          onClick={() => authenticateUser({ id: 42, username: "John Doe" })}
          data-testid="login-button"
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
