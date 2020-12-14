import React from "react";
import NavBar from "components/NavBar";
import SearchBar from "components/Projet/SearchBar"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


// import material ui components
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

function Projet() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar />
      <SearchBar/>
    </React.Fragment>
  );
}

export default Projet;
