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

function CreatePosts() {
    const classes = useStyles();
    useEffect(() => {
      
    }, []);
    
    return (
      <React.Fragment>
        <Typography variant="h3" className={classes.title} >Création d'un poste</Typography>
        
        <TextField
          id="outlined"
          label="Titre"
          variant="outlined"
          className={classes.titlePost}
        />
        <br></br>
        <TextField
          id="outlined-multiline-static"
          label="Contenu"
          multiline
          rows={20}
          variant="outlined"
          className={classes.content}
        />
        <br></br>
        {/*à supprimer quand utilisauer accèsible */}
        <TextField
          id="outlined"
          label="iduser"
          defaultValue="1"
          variant="outlined"
          className={classes.titlePost}
        />
        <Button variant="contained" color="primary" className={classes.bouton}>
          Publier
        </Button>
      </React.Fragment>
    );
}

export default CreatePosts;