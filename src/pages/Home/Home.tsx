import React, { useState, useEffect } from "react";
import NavBar from "components/NavBar";

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

function Home() {
    const [postsList, setPostsList] = useState<Posts[]>([]);
    const classes = useStyles();
    useEffect(() => {
      fetchPosts()
        .then((posts) => setPostsList(posts))
        .catch((e) => console.error(e));
    }, []);

  return (
    <React.Fragment>
      <NavBar />
    </React.Fragment>
  );
}

export default Home;