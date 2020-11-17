import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign:"center",
      margin: '1%',
    },
    titlePost: {
      margin: '1%',
      width: '60%',
    },
    content: {
      margin: '1%',
      width: '60%',
    },
    bouton: {
      margin: '1%',
    },
  }),
);

function UpdatePosts() {
    const classes = useStyles();
    useEffect(() => {
      
    }, []);
    
    return (
      <React.Fragment>
        <Typography variant="h3" className={classes.title} >Création d'un poste</Typography>
        
        <TextField
          id="outlined"
          label="Titre du Poste"
          variant="outlined"
          className={classes.titlePost}
        />
        <br></br>
        <TextField
          id="outlined-multiline-static"
          label="Contenu du poste"
          multiline
          rows={20}
          variant="outlined"
          className={classes.content}
        />
        <br></br>
        <Button variant="contained" color="primary" className={classes.bouton}>
          Modifier
        </Button>

        <Button variant="contained" color="secondary" className={classes.bouton}>
          Supprimer
        </Button>
      </React.Fragment>
    );
}

export default UpdatePosts;