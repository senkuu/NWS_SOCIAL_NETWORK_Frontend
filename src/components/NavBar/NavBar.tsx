import React from "react";

import { Link } from "react-router-dom";

// import material-ui components
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
<<<<<<< HEAD
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Username from "./components/User";
import {Link} from "react-router-dom";
import { inherits } from "util";
=======
>>>>>>> origin/team-enzo


// import local components
import UserProfile from "./components/UserProfile";

// import contexts
import { useUser } from "services/contexts/UserContext";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingBottom: 5,
    },
    title: {
      flexGrow: 1,
    },
<<<<<<< HEAD
    btnNavbar: {
      textDecoration: 'none',
      color: 'inherit'
    }
=======
    link: {
      color: "#FFFFFF",
      textDecoration: "none",
      marginRight: '15px'
    },
>>>>>>> origin/team-enzo
  })
);

function NavBar() {
  const classes = useStyles();

  const { user, disconnectUser, authenticateUser } = useUser();

  // if user is log, return this
  if (user) {
    return (
      <AppBar position="static" className={classes.root} data-testid="navbar">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              NWS
            </Link>
          </Typography>
          <Typography variant="button">
            <Link to="/Projet" className={classes.link}>
                Projet
            </Link>
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
          <Link to="/" className={classes.link}>
            NWS
          </Link>
        </Typography>
<<<<<<< HEAD

        <Link to="/listeDesGuildes" className={classes.btnNavbar}>
          <Button color="inherit"> Les Guildes</Button>
        </Link>
        <Link to="/User/1/guilds" className={classes.btnNavbar}>
          <Button color="inherit"> Les Guildes de l'utilisateur</Button>
        </Link>
          {isAuthenticated ? <Username />  : <Button color="inherit">Login</Button>}  
        
=======
        <Typography variant="button">
        <Link to="/Projet" className={classes.link}>
            Projet
        </Link>
        </Typography>
        <Button
          color="inherit"
          onClick={() => authenticateUser({ id: 42, username: "John Doe" })}
          data-testid="login-button"
        >
          Login
        </Button>
>>>>>>> origin/team-enzo
      </Toolbar>
      
    </AppBar>
  );
}

export default NavBar;
