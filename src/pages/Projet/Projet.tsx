import React from "react";
import NavBar from "components/NavBar";
import SearchBar from "components/Projet/SearchBar"
import CardProject from "components/Projet/SearchBar/CardProject"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useUser } from "services/contexts/UserContext";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


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
    disconnected: {
      marginTop: 10,
      marginLeft: 20,
    }
  }),
);


function Projet() {

  const classes = useStyles();
  const { user, disconnectUser, authenticateUser } = useUser();

  if(user){
  return (
    <React.Fragment>
      <NavBar />
      <Button color="primary" variant="contained" style={{ marginLeft: 20,marginTop: 30}}>
        <Link to="/Form" style={{textDecoration: "none", color:"#fff"}}>
          Créer votre projet
        </Link>
      </Button>
      <SearchBar/>
      <CardProject/>
    </React.Fragment>
  );
}
return(
  <React.Fragment>
    <NavBar />
      <div className={classes.disconnected}>
          <Typography> Veuillez-vous connectez pour accéder à la page des projets.</Typography>
      </div>
   </React.Fragment>
)
}
export default Projet;
