import React, { useState, useEffect } from "react";

import fetchPosts from "services/Posts/fetchPosts";
import { Posts } from "types/posts";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import {Link, LinkProps} from 'react-router-dom'

// import material ui components
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  
    title: {
      textAlign:"center"
    }, 
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
   })
);

function PostsDisplay() {
    const [postsList, setPostsList] = useState<Posts[]>([]);
    const classes = useStyles();
    useEffect(() => {
      fetchPosts()
        .then((posts) => setPostsList(posts))
        .catch((e) => console.error(e));
    }, []);

  return (
    <React.Fragment>
      <Typography variant="h1">Accueil</Typography>
      {postsList.length > 0 ? (
          postsList.map((posts) => <Typography key={posts.id}>
          <List className={classes.root}>
            <ListItem>
              <ListItemText primary={posts.title} secondary={posts.text} />
            </ListItem>
          </List>
        </Typography>)
          ) : (
            <Typography>Chargement</Typography>
          )}
    </React.Fragment>
  );
}

export default PostsDisplay;