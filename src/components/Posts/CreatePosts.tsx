import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { newPosts } from "services/Posts/Posts";

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
    state = {
      title: "",
      text: ""
    }
    
    return (
      <React.Fragment>
        <Typography variant="h3" className={classes.title} >Création d'un poste</Typography>
        
        <TextField
          id="outlined"
          label="Titre"
          variant="outlined"
          value={this.state.title}
          className={classes.titlePost}
        />
        <br></br>
        <TextField
          id="outlined-multiline-static"
          label="Contenu"
          multiline
          rows={20}
          variant="outlined"
          value={this.state.text}
          className={classes.content}
        />
        <Button variant="contained" color="primary" className={classes.bouton} onClick={() => newPosts()}>
          Publier
        </Button>
      </React.Fragment>
    );
}

export default CreatePosts;