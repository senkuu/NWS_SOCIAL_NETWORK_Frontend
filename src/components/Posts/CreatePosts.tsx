import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { newPosts } from "services/Posts/Posts";
import { useForm } from "react-hook-form";
import { Posts } from "types/posts";

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
    const { register, handleSubmit } = useForm<Posts>();
    const onSubmit = (data: Posts) => { newPosts(data.title, data.text); };

    return (
      <React.Fragment>
        <Typography variant="h3" className={classes.title} >Création d'un poste</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined"
            label="Titre"
            variant="outlined"
            className={classes.titlePost}
            ref={register}
          />
          <br></br>
          <TextField
            id="outlined-multiline-static"
            label="Contenu"
            multiline
            rows={20}
            variant="outlined"
            className={classes.content}
            ref={register}
          />
          <br></br>
          <Button variant="contained" color="primary" className={classes.bouton} type="submit">
           Publier
          </Button>
        </form>
      </React.Fragment>
    );
}

export default CreatePosts;